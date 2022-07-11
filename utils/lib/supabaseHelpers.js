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
export async function getJoinedOpportunities(userId){
    const volunteer = await supabase.from('volunteers').select('group').match({ id: userId })
    if(!volunteer?.error){
        const opportunities = await supabase.from('opportunities').select().in('id', volunteer.data[0].group)
        return {
            data: opportunities?.data, 
            error: opportunities?.error
        }
    } else {
        return {
            error: volunteer?.error 
        }
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
    const { data, error } = await supabase.from('volunteers').update({ group: groupId }).match({ id: userId }) 

    if (error) {
        return {
            error: error
        }   
    }
}