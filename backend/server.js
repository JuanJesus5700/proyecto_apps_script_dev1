const doGet = () =>
    HtmlService.createTemplateFromFile("frontend/index")
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag(
        "viewport",
        'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"'
      )
      .setTitle("Proyecto_apps_script_dev1")
      .setFaviconUrl("https://image.flaticon.com/icons/png/512/953/953720.png");
  
  const include = (ruta) =>
    HtmlService.createHtmlOutputFromFile(ruta).getContent();