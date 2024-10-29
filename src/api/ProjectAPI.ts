import api from "@/lib/axios";
import { isAxiosError } from "axios";
import type { ProjectFormData } from "types";


export async function createProject(formData: ProjectFormData){
     try {
        const {data} = await api.post('/projects', formData)
        return data
     }catch(error){
        if(isAxiosError(error) && error.response) { 
        throw new Error(error.response.data.error)
      }
   }
}

export async function getProjects(){
   try {
      const { data } = await api('/projects')
       console.log(data)
   }catch(error){
      if(isAxiosError(error) && error.response){
         throw new Error(error.response.data.error)
      }
   }
}