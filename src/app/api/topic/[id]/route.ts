import prismaConnection from "@/libs/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params}:any){
    const {id} = params;
    const {newTitle,newDescription} = await request.json();
    let id1: number | undefined;

    if(id){
        id1 = parseInt(id, 10);
    }

    if(id!= undefined){
        const topic = await prismaConnection.topic.update({where:{id:id1},data:{title:newTitle,description:newDescription}});
    }

    return NextResponse.json({message:"topic updated successfully"}, {status: 200});

}

export async function GET(request: NextRequest, {params}:any){
    const {id} = params;

    let id1: number | undefined;

    if(id){
        id1 = parseInt(id, 10);
    }

    let topic;

    if(id!= undefined){
        topic = await prismaConnection.topic.findUnique({where:{id:id1}});
    }

    return NextResponse.json({topic}, {status: 200});   
}

