function DestinationCard(props){
return(
    <div className="destination-card">
<h2>{props.destination}</h2>
<p>Explore the beautifull city of{props.destination}</p>
</div>
)
}
export default DestinationCard