import Connection from "@/database/connection";
import getData from "@/database/controller/getData";

export default function handler(req, res) {
  Connection();
  getData(req, res);
}
