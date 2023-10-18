import { Books, Language } from "#cds-models/stuff"; //  TypeError: Cannot read properties of undefined (reading 'enum')
import { Service, Request } from "@sap/cds/apis/services";
import cds from "@sap/cds";
const { SELECT } = cds.ql;

module.exports = cds.service.impl(async function (srv: Service) {
  srv.on("readOneBook", async (req: Request) => {
    const book = await SELECT.one.from(Books);
    console.log(Language.DE);
    req.reply({ title: book.title });
  });
});
