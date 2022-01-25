import api from './api';
import { makeAutoObservable } from 'mobx';

class JamiyaStore{
    jamiyaat = [];
    loading = true;

    constructor(){
        makeAutoObservable (this, {})
    }

    fetchJamiya = async () => {
        try {
            const response = await api.get('/jam3ya');
            console.log("🚀 ~ file: jamiyaStore.js ~ line 14 ~ JamiyaStore ~ fetchJamiya= ~ response", response.data)
           
            this.jamiyaat = response.data;
            console.log("🚀 ~ file: jamiyaStore.js ~ line 17 ~ JamiyaStore ~ fetchJamiya= ~ this.jamiyaat", this.jamiyaat)
            this.loading = false;
            
            
        }
        catch(error) {} 
    }

    createJamiya = async (newJamiya) => {
        try{
            const response = await api.post('/jam3ya', newJamiya)
            this.jamiyaat.push(response.data);
        }
        catch(error) {
            console.log("Jamiya Cannot be created");
        }
    }

    deleteJamiya = async (id) => {
        try {
            await api.delete(`/jam3ya/${id}`);
            let tempJam3ya = this.jamiyaat.filter((jam3ya) => jam3ya._id !== id);
            this.jamiyaat = tempJam3ya;
        }
        catch(error) {
            console.log("Jamiya Cannot be deleted");
        }
    }

    updateJamiya = async (id, updateJamiya) => {
        try{
            const response = await api.put(`/jam3ya/${id}`, updateJamiya)
            this.jamiyaat = this.jamiyaat.map((jam3ya) => jam3ya._id === id ? response.data : jam3ya )
        }
        catch(error) {
            console.log("Jamiya Cannot be Updated");
        }
    }
    joinJamiya = async (id) => {
        try{
            const response = await api.post(`/jam3ya/join/${id}`);
            const jamiya = this.jamiyaat.find((jam3ya) => jam3ya._id === id);
            jamiya.users.push(response.data);
        }
        catch(error) {console.log("You Cannot Join ELJamiya");}
    }

    leaveJamiya = async (id) => {
        try{
            const response = await api.post(`/jam3ya/leave/${id}`);
            this.jamiyaat = this.jamiyaat.map((jam3ya) => jam3ya._id === id ? response.data : jam3ya);
        }
        catch(error) {}
    }
}

const jamiyaStore = new JamiyaStore();
jamiyaStore.fetchJamiya();
export default jamiyaStore