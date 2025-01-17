/*
	-----------------------------------------------------------------
	SETTINGS
	Test colLimit and rowLimit setting passed to init()
	-----------------------------------------------------------------
 */

QUnit.module("API: init(colLimit)");

function __testcolLimitSetting(title, value, expected) {
	QUnit.test("Set colLimit from " + title, function(assert) {
		assert.expect(1);

		var cal = createCalendar({ colLimit: value });
		assert.deepEqual(cal.options.colLimit, expected, "colLimit is set to " + expected);
	});
}

__testcolLimitSetting("null will disable colLimit", null, null);
__testcolLimitSetting("false will disable colLimit", false, null);
__testcolLimitSetting("an invalid value (string) will disable colLimit", false, null);
__testcolLimitSetting("a valid empty integer will disable colLimit", 0, null);
__testcolLimitSetting("a valid non-empty integer will set colLimit", 2, 2);


QUnit.module("API: init(rowLimit)");

function __testRowLimitSetting(title, value, expected) {
	QUnit.test("Set rowLimit from " + title, function(assert) {
		assert.expect(1);

		var cal = createCalendar({ rowLimit: value });
		assert.deepEqual(cal.options.rowLimit, expected, "rowLimit is set to " + expected);
	});
}

__testRowLimitSetting("null will disable rowLimit", null, null);
__testRowLimitSetting("false will disable rowLimit", false, null);
__testRowLimitSetting("an invalid value (string) will disable rowLimit", false, null);
__testRowLimitSetting("a valid empty integer will disable rowLimit", 0, null);
__testRowLimitSetting("a valid non-integer will set rowLimit", 2, 2);

QUnit.test("RowLimit is disabled when colLimit is set", function(assert) {
	assert.expect(1);

	var cal = createCalendar({ colLimit: 5, rowLimit: 5 });
	assert.deepEqual(cal.options.rowLimit, null, "rowLimit is disabled");
});
