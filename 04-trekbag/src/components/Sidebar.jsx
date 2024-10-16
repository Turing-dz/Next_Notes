import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
// export default function Sidebar({handleAddList,handleRemoveAll,handleReset,handleComplete,handleIncomplete}) {
//   return (
//     <div className="sidebar">
//       <AddItemForm onAddList={handleAddList}/>
//       <ButtonGroup handleRemoveAll={handleRemoveAll} handleReset={handleReset } handleComplete={handleComplete} handleIncomplete={handleIncomplete/>
//     </div>
//   );
// }
export default function Sidebar() {
  return (
    <div className="sidebar">
      <AddItemForm />
      <ButtonGroup/>
    </div>
  );
}
