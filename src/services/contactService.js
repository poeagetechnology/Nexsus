import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function submitContactForm(formData) {
  await addDoc(collection(db, "contact_submissions"), {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "",
    subject: formData.subject || "",
    message: formData.message,
    website: "Poeage Nexus",
    isRead: false,
    createdAt: serverTimestamp(),
  });
}
