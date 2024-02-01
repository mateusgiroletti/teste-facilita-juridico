import PostgreeClient from "../../database/PostgreeClient";

export function makePostgreeClient(){
    return new PostgreeClient();
}