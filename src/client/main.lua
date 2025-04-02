function ToggleUI(isOpen)
    SetNuiFocus(isOpen, isOpen)
    SendNUIMessage({ action = 'setVisible', payload = isOpen })
end

RegisterNuiCallback('hideFrame', function(_, cb)
    if SetNuiFocus(false, false) then
        return cb(true)
    end

    return cb(false)
end)

RegisterNuiCallback('getColors', function(_, cb)
    local config = require 'config'

    cb(config.colors)
end)

RegisterCommand('openUI', function()
    ToggleUI(true)
end, false)
