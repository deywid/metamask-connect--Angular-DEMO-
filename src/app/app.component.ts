import { Component } from '@angular/core';
import { Web3Service } from './web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'metamask-connect';
  web3wallet: string | undefined;

  errors: string = "declare global {\n  interface Window {\n    ethereum: any;\n  }\n}";
  check: string = "typeof window.ethereum !== 'undefined'";
  accounts: string = "const accounts = await ethereum.request({ method: 'eth_requestAccounts' });\nreturn accounts[0];";

  constructor(private web3: Web3Service) { }

  async connect() {
    this.web3wallet = await this.web3.connectToMetaMask();
  }
}
