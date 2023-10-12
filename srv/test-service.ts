import { Books } from "#cds-models/stuff";
import { Service, Request } from "@sap/cds/apis/services";
import cds from "@sap/cds";
const { SELECT } = cds.ql;

module.exports = cds.service.impl(async function (srv: Service) {
  srv.on("readOneBook", async (req: Request) => {
    const book = await SELECT.one.from(Books);
    req.reply({ title: book.title, language: book.language });
  });
});
