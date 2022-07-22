import axios from "axios";

export class AuctionService{
    static serverURL = `http://localhost:9000`;

    static createAuction(auction){
        let dataURL = `${this.serverURL}/contacts`
        return axios.post(dataURL, auction)
    }
    static getAllAuction(){
        let dataURL = `${this.serverURL}/contacts`
        return axios.get(dataURL)
    }
    static updateAuction(auction, auctionId){
        let dataURL = `${this.serverURL}/contacts/${auctionId}`
        return axios.put(dataURL, auction)
    }
    static getAuction(auctionId){
        let dataURL = `${this.serverURL}/contacts/${auctionId}`
        return axios.get(dataURL)
    }

    static deleteAuction(auctionId){
        let dataURL = `${this.serverURL}/contacts/${auctionId}`
        return axios.delete(dataURL)
    }
    static getAllGroups(){
        let dataURL = `${this.serverURL}/groups/`
        return axios.get(dataURL)
    }
    static getGroup(auction){
        let groupId = auction.groupId
        let dataURL = `${this.serverURL}/groups/${groupId}`
        return axios.get(dataURL)
    }
}