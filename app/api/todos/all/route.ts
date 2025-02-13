import DatabaseController from "@/database/controller";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "database", "todos.json");
    // Initialize the database controller
    const todosController = new DatabaseController(filePath);

    // Read the database (await the async call)
    const database = await todosController.readDB();

    // Return a response
    return NextResponse.json({ message: database });
  } catch (error) {
    console.error("Error in GET /api/hello:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
