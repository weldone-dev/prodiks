import {GostPage} from "@/view/GostPage";
import {redirect} from "next/navigation";
import {getGostList} from "@/features/data/api/getGostList"

interface IProps {
    params: {
        name: string;
    }
}
export default async function GostName ({params}: IProps) {
    const name = decodeURIComponent(params.name)
    const gostList = await getGostList();
    const isExists = gostList.some(item => item.name === name)
    if (!isExists) {
        redirect(`/gost`);
    }
    return (
        <GostPage gostList={gostList} name={name}/>
    )
}