interface props {
    url: string;
    title: string;
    description: string;
}
function Feature (props: props) {
    return (<>
    
        <div className="flex flex-col items-left gap-2">
            <img src = {props.url} className="rounded-2xl w-full"></img>
            <p className="font-semibold mt-2px lg:mt-3px"> {props.title} </p>
            <p className="lg:mt-3px"> {props.description} </p>
        </div>
        
    </>)
}

 export default Feature;