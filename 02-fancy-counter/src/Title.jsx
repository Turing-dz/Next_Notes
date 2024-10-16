// import "./Title.css"
export default function Title({locked}) {
//   return <h1 style={{ fontSize: "20px", color: "red" }}>Fancy counter</h1>;
// return <h1 >Fancy counter</h1>;
return <h1 className="title">{locked?<span>Limit! buy pro for &gt;5</span>:<span>welcome</span>}</h1>;
}
