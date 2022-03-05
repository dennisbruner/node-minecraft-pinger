declare module 'minecraft-pinger'

export interface pingPromiseInterface {
	/**
	 * Server Description , May not exist
	 */
	description?: {
		/**
		 * Raw Text
		 */
		text: string;
		extra?: {
			/**
			 * Color of the text
			 */
			color?: string;
			/**
			 * Raw Text
			 */
			text: string;
			/**
			 * If Text is bold
			 */
			bold?: boolean;
			/**
			 * If Text is strikethroughed
			 */
			strikethrough?: boolean;
			
			extra?: {
				/**
				 * Color
				 */
				color: string;
				/**
				 * Raw Text
				 */
				text: string;
			}
		};
	};
	players: {
		/**
		 * Current Number of players online
		 */
		online: number;
		/**
		 * Maximum Number of players that could be online
		 */
		max: number;
	};
	version: {
		/**
		 * Server Software & Version Supports
		 */ 
		name: string;
		/**
		 * Protocol Version
		 */
		protocol: number};
	/**
	 * RoundTrip Latency in milliseconds
	 */
	ping: number;
	/**
	 * Moderator Info
	 */
	modinfo?: {
		/**
		 * Mod list type
		 */
		type: string;
		/**
		 * Moderator List May not exist
		 */
		modList: string[]};
	/**
	 * Server Favicon , Can be more than 1000 Characters
	 */
	favicon?: string;
}


/**
 * Returns basic info about the server, asynchronously
 * 
 * @param {string} hostname The host name of the server
 * @param {number} port Port of the server most servers default to 25565
 * @returns {Promise<pingPromiseInterface>} The information of the server
 */
export declare  function pingPromise(
	/**
	 * The Host Name 
	 */
	hostname:string,
	/**
	 *  The Port of the server , most servers default to 25565
	 */
	port:number): Promise<pingPromiseInterface>;
/**
 * Returns basic info about the server
 * 
 * @param {string} hostname The host name of the server  
 * @param {number} port Port of the server most servers default to 25565
 * @returns  The information of the server 
 */
export declare  function ping(
	/**
	 * The Host Name 
	 */
	hostname:string,
	/**
	 *  The Port of the server , most servers default to 25565
	 */
	port:number):pingPromiseInterface