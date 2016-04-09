#!/usr/bin/env node

var moguLen = 20

function repeat(times, str) {
    var out = ""
    for(var i = 0; i < times; i++) out += str
    return out
}

function len(str) {
    return str.replace(/[^\x00-\xff]/g, "42").length
}

function drawModal(str) {
    var main     = "+ " + str + " +"
    var flag     = ["==", "然而不如D=="]
    var diff     = len(main) - len(flag.join(""))
    var adiff    = Math.abs(diff)
    var trim     = diff < 0 ? 0 : adiff
    var space    = Math.floor(adiff / 2)
    var whiteSpc = repeat(trim, "=")
    var leftPad  = diff < 0 ? repeat(space, " ") : ""
    var rightPad = diff < 0 ? repeat(adiff - space, " ") : ""
    var llPad    = repeat(moguLen - 2, " ")

    var header   = llPad + "=============" + whiteSpc + "\n"
    var main     = llPad + "+ " + leftPad + str + rightPad + " +\n"
    var footer   = llPad + flag[0] + whiteSpc + flag[1]
    return header + main + footer
}

function drawMogu() {
    var header = "\n"
	+ "     **********  /\\\n"
	+ "  ****************\n"
	+ " ******************\n"
	+ "********************\n"
	+ "********************\n"
	+ " ******************\n"
	+ "   **************\n"
    var footer = "      +------+\n"
    var main   = ""
	+ "   |   =    0  |\n"
	+ "    \\     3    /\n"
    return header + main + footer
}

function main() {
    console.log(drawModal(process.argv.slice(2)[0]) + drawMogu())
}

main()
