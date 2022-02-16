declare module 'minecraft-pinger'

export interface pingPromiseInterface {
    description: {
		text: string;
		extra?: {
			color?: string;
			text: string;
			bold?: boolean;
			strikethrough?: boolean;
			extra?: {
				color: string;
				text: string;
			};
		};
	};
	players: {
		online: number;
		max: number;
		sample?: {name: string; id: string}[];
	};
	version: {name: string; protocol: number};
	ping: number;
	modinfo?: {type: string; modList: string[]};
	favicon?: string;
}


/**
 * Returns basic info about the server, asynchronously
 * 
 * @param {string} hostname The host name of the server
 * @param {number} port Port of the server most servers default to 25565
 * @returns  The information of the server
 */
export declare  function pingPromise(hostname:string,port:number): Promise<pingPromiseInterface>;
/**
 * Returns basic info about the server
 * 
 * @param {string} hostname The host name of the server  
 * @param {number} port Port of the server most servers default to 25565
 * @returns  The information of the server 
 */
export declare function ping(hostname:string, port:number ,params?:(error?:Error, result?:pingPromiseInterface) => null):pingPromiseInterface