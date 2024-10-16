import { FACEBOOK_MAX_CHARACTERS, INSTRAGRAM_MAX_CHARACTERS } from "../lib/constants";


export default function Stats({text}) {
  const words=text.split(/\s/).filter((word)=>{return word!==""}).length;
  const characters=text.length
  const instrgam=INSTRAGRAM_MAX_CHARACTERS-characters
  const facebook=FACEBOOK_MAX_CHARACTERS-characters
  return (
    <section className="stats">
      <Stat count={words} tag="Words"/>
      <Stat count={characters} tag="Characters"/>
      <Stat count={instrgam} tag="Instagram"/>
      <Stat count={facebook} tag="Facebook"/>

    </section>
  )
}
function Stat({count,tag}){
  return (
    <section className="stat">
      <span className={`stat_number ${count <0 ? 'stat__number--limit':'' }`}>{count}</span>
      <span className="second-heading">{tag}</span>
    </section>
  )
}