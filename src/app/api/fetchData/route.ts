import { NextResponse } from "next/server";
import firebaseAdmin from "../../lib/firebaseAdmin"; // Import Firestore from Admin SDK

export async function GET() {
  try {
    const snapshot = await firebaseAdmin
      .firestore()
      .collection("testData")
      .get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
