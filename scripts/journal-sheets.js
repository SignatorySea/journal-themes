globalThis.MODULE_ID = "sigs-dnd-items";

Hooks.once("init", () => {
    hollowKnightJournal();

});

function hollowKnightJournal(){

//this makes a new journal sheet style to be selected and registers it to the system
    class HK extends foundry.applications.sheets.journal.JournalEntrySheet { //Replace "HK" with the uppercase abbreviation for the theme you are adapting
        constructor(doc, options) {
        super(doc, options);
        this.options.classes.push("hk"); //Replace "HK" with the lowercase abbreviation for the theme you are adapting
        }
    }

  foundry.applications.apps.DocumentSheetConfig.registerSheet(JournalEntry, MODULE_ID, HK, { //Replace "HK" with the uppercase abbreviation for the theme you are adapting
    types: ["base"],
    label: "Hollow Knight", //replace name with appropriate label name
    makeDefault: false,
    canBeDefault: true,
    canConfigure: true
  }); //this code is courtesy of u/Freeze014
}

//this only works in v14 and above for inserting in the editor, but I think thats okay
function registerProseMirrorInserts(){
    CONFIG.TextEditor.inserts.push({
        action: "Hollow Knight",
        title: "Hollow Knight Journal Templates",
        children: [
            {
                action: "Decorated Table",
                title: "Decorated Table",
                html: '<div class="decoration frame"><h5>Decorated Table</h5><table><thead><tr><th><p>Heading 1</p></th><th><p>Heading 2</p></th></tr></thead> <tbody><tr><td><p>1</p></td><td><p>+2</p></td></tr><tr><td><p>2</p></td><td><p>+2</p></td></tr></tbody></table></div>'
            },
            {
                action: "Comment Box",
                title: "Comment Box",
                html: '<p class =comment>text<br> These boxes work best for big notes or <br> even just for quotes. </p>'
            },
            {
                action: "Descriptive Box",
                title: "Descriptive Box",
                html: '<p class=descriptive>text</p>'
            },
            {
                action: "Note Box",
                title: "Note Box",
                html: '<p class=note>text</p>'
            }
        ]
    });
    
}
