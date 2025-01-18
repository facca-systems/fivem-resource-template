fx_version "cerulean"
game "gta5"
lua54 "yes"

author "HeyyCzer"
version "1.0.0"
description "Basic boilerplate"

shared_script {
	"@ox_lib/init.lua",
	"@vrp/lib/Utils.lua",
	"config/*",
	"src/shared/**",
}

client_scripts {
	"src/client/**",
}

server_scripts {
	"src/server/**",
}