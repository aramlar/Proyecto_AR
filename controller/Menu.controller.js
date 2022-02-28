sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        function onInit() {

        }

        function onAfterRendering() {

        }

        function onCreateEmployee() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CreateEmployee", {}, false);
        }

        //Función al pulsar sobre el Tile "Ver empleados". Hace un routing a la vista "showEmployee"
        function onShowEmployee() {
            //Se obtiene el conjuntos de routers del programa
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //Se navega hacia el router "ShowEmployee"
            oRouter.navTo("ShowEmployee", {}, false);
        }

        function onSignOrder() {
            const RutaAppFirmarPedidos = this.getOwnerComponent().RutaAppFirmarPedidos;
            window.open(RutaAppFirmarPedidos, '_blank');
        };

        var Menu = Controller.extend("rrhh.rrhh.controller.Menu", {});
        Menu.prototype.onInit = onInit;
        Menu.prototype.onAfterRendering = onAfterRendering;
        Menu.prototype.onCreateEmployee = onCreateEmployee;
        Menu.prototype.onShowEmployee = onShowEmployee;
        Menu.prototype.onSignOrder = onSignOrder;

    });