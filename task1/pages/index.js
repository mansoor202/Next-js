import Link from 'next/link'

function SayHello(){
    return(
        <>
        <Link href="/sections">
            <button>Go to Sections</button>
        </Link>

        <Link href="/teams">
            <a>Teams</a>
        </Link>
        <h2>Hello</h2>
        </>
    )
}

export default SayHello