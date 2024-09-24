import {redirect} from "next/navigation";
import {getGostList} from "@/features/data/api/getGostList"

export default async function GostName () {
    const gostList = await getGostList();
    return redirect(`/gost/${encodeURIComponent(gostList[0].name)}`);
}