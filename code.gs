function myFunction() {
//change with your project name, for except delete project file
var projectname = "delete file";
//change max file for delete in one time run for  avoid request time out
var maxsfile = 50;
//run project
	var files = DriveApp.getFiles();
	var i = 1;
	while (files.hasNext()) {

		var step = i++;
		var file = files.next();
		var checkfile = file.getName();

		
		if (checkfile == projectname) {
			Logger.log('file sengaja di lewatin, biar ga kehapus');
			PropertiesService.getScriptProperties().setProperty('run', 'STOP');
			files.next();
		} else {
			if (step <= maxsfile) {

				Logger.log('menghapus file ke:' + step + ' dengan nama fike "%s"', checkfile);
				file.setTrashed(true);
			} else {
				Logger.log('istirahat dulu yaaa biar ga capek.');
				PropertiesService.getScriptProperties().setProperty('run', 'STOP');
				return 'Kill Signal Issued';
			}
		}
	}
}
