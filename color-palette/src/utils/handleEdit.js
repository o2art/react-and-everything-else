import db from "../firebase/firebase";
import { setDoc, doc} from '@firebase/firestore';

export const handleEdit = async (id) => {
    const name = prompt("Name a color");
    const value = prompt("Name it value");
    const docRef = doc(db, "colors", id);
    const payload = {name : name, value: value};
    await setDoc(docRef, payload);
    console.log(`id of edited doc: ${id}`)
}