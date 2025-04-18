export default {
  async fetch(request, env, ctx) {
    const gasWebhookUrl = "https://script.google.com/macros/s/AKfycbyQ4cGN8TcgsS2RzM9SEP3vyhUY892mjVMbZW8plwDDx4v_lStKjfCRDyyKYF2k95tN/exec"; // ←ここに自分のGASのURLを貼ってね！

    if (request.method === "POST") {
      const headers = {
        "Content-Type": "application/json",
      };

      const body = await request.text();

      // GASにPOSTを中継
      const response = await fetch(gasWebhookUrl, {
        method: "POST",
        headers,
        body,
      });

      return new Response("OK", { status: 200 }); // LINEには常に200 OKを返す
    } else {
      return new Response("This is a LINE to GAS relay endpoint", { status: 200 });
    }
  },
};
