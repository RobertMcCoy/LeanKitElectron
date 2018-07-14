import Vue from "vue";
import LandingPage from "@/components/LandingPage";
import chai from "chai";
import sinonChai from "sinon-chai";
import sinon from "sinon";
import axios from "axios";
chai.use(sinonChai);

let vm;

describe("The Landing Page", () => {
  beforeEach(() => {
    vm = new Vue({
      el: document.createElement("div"),
      render: h => h(LandingPage)
    }).$mount();
  });

  it("should render correct contents", () => {
    expect(vm.$el.querySelector(".title").textContent).to.contain("LeanKit for Desktop");
  });

  describe("given the user has entered their credentials", () => {
    beforeEach(() => {
      vm.accountname = "testaccountpleaseignore";
      vm.username = "testuser";
      vm.password = "testpass";
    });

    describe("given they have clicked the login button", () => {
      it("makes a request to get the LeanKit board information", () => {
        sinon.spy(axios, "get");
        vm.login();
        expect(axios.get.calledOnce).to.be.true;
      });
    });
  });
});
