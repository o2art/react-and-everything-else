import db from "../firebase/firebase";
import { collection, addDoc} from '@firebase/firestore';

export const handleNew = async () => {
    const name = prompt("Name a color");
    const value = prompt("Name it value");
    const collRef = collection(db, "colors");
    const payload = {name : name, value: value};
    const docRef = await addDoc(collRef, payload);
    console.log("id of new doc: " + docRef.id)
}