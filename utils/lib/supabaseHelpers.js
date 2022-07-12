import { supabase } from "../../supabse";

// ------------------------------------------------------ auth ----------------------------------------------------
export async function signUp({email, password, data}){
    delete data.password

    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    },
    {
      data: data,
    })

    // create a public schema table for volunteers
    if(!error){
        const date = new Date()
        const volunteer = await supabase.from('volunteers').insert([{ 
            id: user.id, created_at: date.toISOString(), name: data.name, group: null 
        }])

        if(volunteer.error){
            return {
                error: volunteer.error.message
            }
        }
    }

    return {
        user: user, 
        session: session, 
        error: error?.message
    }
}

export async function signIn({email, password}){
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    })

    return {
        user: user, 
        session: session, 
        error: error?.message
    }
}


// ------------------------------------------------Opportunities----------------------------------------------
export async function getOpportunities(){
    const { data, error } = await supabase.from('opportunities').select()
    return {
        data: data, 
        error: error
    }
}
export async function getJoinedOpportunities(userId, setjoinedOpportunitiesData, setgroupId, seterror){
    const volunteer = await supabase.from('volunteers').select('group').match({ id: userId })
    if(!volunteer?.error && volunteer?.data[0]?.group !== null){
        const opportunities = await supabase.from('opportunities').select().in('id', volunteer?.data[0]?.group)
        if(!opportunities?.error) {
            setjoinedOpportunitiesData(opportunities?.data)
            setgroupId(volunteer?.data[0]?.group)
        } else {
            seterror(true)
        }
    } else {
        seterror(true)
    }
}
export async function getOpportunity(id){
    const { data, error } = await supabase.from('opportunities').select().match({ id: id })
    return {
        data: data, 
        error: error
    }
}
export async function joinGroup({groupId, userId}){
    const { error } = await supabase.from('volunteers').update({ group: groupId }).match({ id: userId }) 

    if (error) {
        return {
            error: true
        }   
    }
}

// --------------------------------------------------chats-----------------------------------------------------
export async function getChatGroups(userId){
    const volunteer = await supabase.from('volunteers').select('group').match({ id: userId })
    if(!volunteer?.error && volunteer?.data[0]?.group !== null){
        const chatGroups = await supabase.from('opportunities').select().in('id', volunteer?.data[0]?.group)
        // console.log(chatGroups?.data);
        return {
            data: chatGroups?.data, 
            error: chatGroups?.error
        }
    } else {
        return {
            error: true 
        }
    }
}
export async function getMessages(groupId, setmessages, seterror){
    const messages = await supabase.from('chats').select(`
        *,
        volunteer (
            name,
            id
        )`).match({ group: groupId }).order('created_at', { ascending: true })

    if (messages?.error) {
        seterror(true)
    } else {
        setmessages(messages.data)
    }
}
export async function createMessage(groupId, userId, message, seterror){
    const date = new Date()
    const res = await supabase.from('chats').insert([{ 
        volunteer: userId,
        created_at: date.toISOString(), 
        message: message, 
        group: groupId
    }])
    if(res.error) {
        seterror(true)
    }
}
