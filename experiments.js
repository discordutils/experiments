/**
 * @name Experiments
 * @description Enables the experiments in Discord Settings.
 * @author discordutils
 * @version 1-stable
 * @source https://github.com/discordutils/experiments
 * @updateUrl https://github.com/discordutils/experiments.js
 */

const storeExports = BdApi.findModule(m => Reflect.has(m?.default, "isDeveloper"));
const original = storeExports.default;


module.exports = class {
	getName(){ return "Discord Experiments"; }

	start() {
    storeExports.default = new Proxy(original, {
			get(_, key) {
				return key === "isDeveloper" ? true : original[key];
			}
		});
	}

	stop(){
		storeExports.default = original;
	}
};
