// firestorefunctions.js
import { db } from './firebase'; // Ensure the path is correct
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";

export const addComment = async (commentData) => {
  const commentRef = await addDoc(collection(db, 'comments'), commentData);
  return commentRef;
};

export const getComments = async () => {
  const snapshot = await getDocs(collection(db, 'comments'));
  const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return comments;
};

export const updateComment = async (commentId, updatedData) => {
  const commentDoc = doc(db, 'comments', commentId);
  await updateDoc(commentDoc, updatedData);
};
