import{EditButton}from"./EditButton"
const style={
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius:"8px",
    backgroundColor: "#e9bd0",
    display: "felx",
    flexDirecrion: "column",
    fustifyContent: "center",
    alignItems:"center"    
    
};
export const Card = props =>{
    const {isAdmin}　=　props;
    return (
        <div style={style}>
        <p>康</p>
        <EditButton isAdimin={isAdmin}/>
        </div>
        );
}
export default Card;