import { supabase } from "../../supabse";

// ------------------------------------------------------ auth ----------------------------------------------------
export async function signUp({email, password, data, setloading, seterror, router}){
    setloading(true)
    delete data.password
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    },
    {
      data: data,
    })

    // create a public schema table for volunteers
    data.id = user?.id
    if(!error){
        const volunteer = await supabase.from('volunteers').insert([data])
        volunteer?.error ? seterror(true) : router.replace('/app')
    } else{
        seterror(true)
    }
    setloading(false)
}

export async function signIn({email, password, seterror, setloading, router}){
    setloading(true)
    const res = await supabase.auth.signIn({
        email: email,
        password: password,
    })
    res?.error ? seterror(true) : router.replace('/app')
    setloading(false)

}

export async function signOut({seterror, setloading, router}){
    setloading(true)
    const res = await supabase.auth.signOut()
    res?.error ? seterror(true) : router.push('/')
    setloading(false)

}

//---------------------------------------------------pofile----------------------------------------------------
export async function updateProfile(id, data, setsuccess, seterror, setloading){
    setloading(true)
    const auth = await supabase.auth.update({ 
        data: data
    })
    if(auth?.error) {
        seterror(true)
    } else {
        const user = await supabase.from('volunteers').update(data).match({id: id})
        user?.error ? seterror(true) : setsuccess(true)
    }
    setloading(false)
}


// ------------------------------------------------Opportunities----------------------------------------------
export async function getOpportunities({setopportunitiesData, seterror, setloading}){
    setloading(true)
    const opportunities = await supabase.from('opportunities').select()
    opportunities?.error ? seterror(true) :setopportunitiesData(opportunities.data)
    setloading(false)
}
export async function getJoinedOpportunities({id, setjoinedOpportunitiesData, setgroupId, seterror, setloading}){
    setloading(true)
    const volunteer = await supabase.from('volunteers').select('group').match({ id: id })
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
    setloading(false)
}

export async function getOpportunityById({id, seterror, setloading, setopportunityData}){
    setloading(true)
    const opportunity = await supabase.from('opportunities').select().match({ id: id })
    opportunity?.error ? seterror(true) : setopportunityData(opportunity.data[0])
    setloading(false)
}

export async function joinGroup({groupId, userId, seterror, setloading, router, id}){
    setloading(true)
    const group = await supabase.from('volunteers').update({ group: groupId }).match({ id: userId }) 
    if(group?.error){
        seterror(true)
    }else{
        router.replace(`/app/chats/${id}`)
    }
    setloading(false)
}

// --------------------------------------------------chats-----------------------------------------------------
export async function getChatGroups({userId, setchatGroups, seterror, setloading}){
    setloading(true)
    const volunteer = await supabase.from('volunteers').select('group').match({ id: userId })
    if(volunteer?.error){
        seterror(true)
    }else if(volunteer?.data[0]?.group !== null){
        const chatGroups = await supabase.from('opportunities').select().in('id', volunteer?.data[0]?.group)
        chatGroups?.error ? seterror(true) : setchatGroups(chatGroups.data)

    }
    setloading(false)
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
export async function getMessage(id, setmessages, seterror){
    const messages = await supabase.from('chats').select(`
        *,
        volunteer (
            name,
            id
        )`).match({ id: id - 1 })

    if (messages?.error) {
        seterror(true)
    } else {
        console.log(messages);
        setmessages((prev)=> [...prev, messages.data[0]])
    }
}
export async function createMessage(groupId, userId, message, seterror){
    // const date = new Date()
    const res = await supabase.from('chats').insert([{ 
        volunteer: userId,
        // created_at: date.toISOString(), 
        message: message, 
        group: groupId
    }])
    if(res.error) {
        seterror(true)
    }
}
export async function getNewMessages(){
    const mySubscription = supabase.from('countries').on('INSERT', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
}
