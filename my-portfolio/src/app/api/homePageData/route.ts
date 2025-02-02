import { NextResponse } from "next/server";
import firebaseAdmin from "../../lib/firebaseAdmin"; // Import Firestore from Admin SDK
import { HOMEPAGE_DB_IDS } from "@/app/constants/homepage";

export async function GET() {
  try {
    const snapshot = await firebaseAdmin
      .firestore()
      .collection(HOMEPAGE_DB_IDS.HOMEPAGE_COLLECTION_ID)
      .get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching homePage data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
