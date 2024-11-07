import { prisma } from "@/prisma/prisma-client";
import axios from "axios";

export const service = {
    get: {
        async lists() {
            const data = await axios.get(`http://localhost:3000/api/todo`);
            console.log(data.data);
            return data;
        }
    }
}