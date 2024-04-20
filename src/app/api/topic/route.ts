import prismaConnection from "@/libs/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:any){
    const {title,description} = await request.json();

    const topic = await prismaConnection.topic.create({data:{title,description}});
    console.log(topic);
    return NextResponse.json({message:"topic created successfully"}, {status: 201});
}

export async function GET(){
    const topics = await prismaConnection.topic.findMany();
    return NextResponse.json({ topics});
}

export async function DELETE(request: NextRequest){
    const idString = request.nextUrl.searchParams.get("id");
    let id: number | undefined;
    
    if(idString){
        id = parseInt(idString, 10);
    }
    
    if(id != undefined){
        await prismaConnection.topic.delete({where: {id}});
    }

    return NextResponse.json({message:"topic deleted successfully"}, {status: 200});
}

