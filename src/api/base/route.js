export async function GET(request){
    const user = [
        {
            id: 1,
            name: 'John Doe',
            email: 'email#example.com',
            phone: '1234567890',
            website: 'example.com'
        },
    ]
    return new Response(JSON.stringify(user), {
        headers: {
            'content-type': 'application/json',
        },
    })
}