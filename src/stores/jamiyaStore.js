import api from './api';
import { makeAutoObservable } from 'mobx';

class JamiyaStore{
    jamiyaat = [];

    constructor(){
        makeAutoObservable (this,{})
    }

    fetchJamiya = async () => {
        try {
            const response = await api.get('/jam3ya');
            this.jamiyaat = (response.data);
        }
        catch(error) {} 
    }

    createJamiya = async (newJamiya) => {
        try{
            const response = await api.post('/jam3ya', newJamiya)
            this.jamiyaat = [...this.jamiyaat, response.data]
        }
        catch(error) {
            console.log("Jamiya Cannot be created");
        }
    }

    deleteJamiya = async (id) => {
        try {
            await api.delete(`/jam3ya/${id}`);
            let tempJam3ya = this.jamiyaat.filter((jam3ya) => jam3ya._id !== _id);
            this.jamiyaat = tempJam3ya;
        }
        catch(error) {
            console.log("Jamiya Cannot be deleted");
        }
    }

    updateJamiya = async (id, updateJamiya) => {
        try{
            const response = await api.put(`/jam3ya/${_id}`, updateJamiya)
            this.jamiyaat = this.jamiyaat.map((jam3ya) => jam3ya._id === _id ? response.data : jam3ya )
        }
        catch(error) {
            console.log("Jamiya Cannot be Updated");
        }
    }
    joinJamiya = async (id) => {
        try{
            const response = await api.post(`/jam3ya/join/${_id}`);
            const jamiya = this.jamiyaat.find((jam3ya) => jam3ya._id === _id);
            jamiya.users.push(response.data);
        }
        catch(error) {console.log("You Cannot Join ELJamiya");}
    }

    leaveJamiya = async (id) => {
        try{
            const response = await api.post(`/jam3ya/leave/${_id}`);
            this.jamiyaat = this.jamiyaat.map((jam3ya) => jam3ya._id === _id ? response.data : jam3ya);
        }
        catch(error) {}
    }
}

const jamiyaStore = new JamiyaStore();
jamiyaStore.fetchJamiya();
export default jamiyaStore