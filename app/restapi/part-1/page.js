export default async function ApiTestPage(){

    let data="";
    const response=await fetch("https://hinntam.vercel.app/restapi/part-1/api");

    if(!response.ok){
        data="Data could not be retrieved."

    } else {
        data=await response.text();
    }

    return(
        <main>
            <h1>
                Week 12 Part 1
            </h1>
            <p>{data}</p>
            <form method="POST" action="http://localhost:3000/week-12/part-1/api">
                <div>
                    <label>
                        Test input:
                    </label>
                    <input type="text" name="test_input"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    )
}