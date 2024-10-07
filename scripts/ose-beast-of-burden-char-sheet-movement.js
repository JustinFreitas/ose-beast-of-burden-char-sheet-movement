Hooks.on("renderActorSheet", (_, html, data) => {
    const classNameToMovementStatsMap = {
        'Draft Horse': { 'baseMove': 90, 'maxCapacity': 9000 },
        'Mule': { 'baseMove': 120, 'maxCapacity': 4000 },
        'Riding Horse': { 'baseMove': 240, 'maxCapacity': 6000 },
        'War Horse': { 'baseMove': 120, 'maxCapacity': 8000 },
    };

    const charClass = data?.system?.details?.class;
    if (!charClass || charClass.length === 0 || !classNameToMovementStatsMap.hasOwnProperty(charClass)) {
        return;
    }

    const movementStats = classNameToMovementStatsMap[charClass];
    const movementBaseInputElement = html[0].querySelector("input[name='system.movement.base']");
    const resourcesListElement = movementBaseInputElement.parentElement.parentElement.parentElement;
    const overlandMovementElement = resourcesListElement.children[0].querySelector("div[class='attribute-value']");
    const encounterMovementElement = resourcesListElement.children[2].querySelector("div[class='attribute-value']");
    const currentEncumbrance = data?.system?.encumbrance?.value ?? 0;
    var explorationMovementRate;
    if (currentEncumbrance <= movementStats.maxCapacity / 2) {
        explorationMovementRate = movementStats.baseMove;
        movementBaseInputElement.setAttribute('value', explorationMovementRate);
    } else if (data.system.encumbrance.value <= movementStats.maxCapacity) {
        explorationMovementRate = movementStats.baseMove / 2;
        movementBaseInputElement.setAttribute('value', explorationMovementRate);
    } else {
        explorationMovementRate = 0;
        movementBaseInputElement.setAttribute('value', explorationMovementRate);
    }

    overlandMovementElement.innerHTML = '';
    overlandMovementElement.appendChild(document.createTextNode(explorationMovementRate / 5));
    encounterMovementElement.innerHTML = '';
    encounterMovementElement.appendChild(document.createTextNode(explorationMovementRate / 3));
});
