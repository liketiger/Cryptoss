import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

function CurrencySwitch(props) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default CurrencySwitch;
