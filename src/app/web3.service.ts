import { Injectable } from '@angular/core';

declare global {
  interface Window {
    ethereum: any;
  }
}

@Injectable({ providedIn: 'root' })
export class Web3Service {

  async connectToMetaMask() : Promise<string | undefined> {
    let ethereum = window.ethereum;

    if (typeof ethereum !== 'undefined') {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];

      } catch (error: any) {
        alert(error['message']);
        return;
      }
    }
    else {
      alert('No provider was found. Try again after installing MetaMask extension!');
      return;
    }
  }

}
