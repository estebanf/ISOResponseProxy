var config = {};

var env = "dev";
//var env = "int";

config.bpms = {};

config.bpms.server = env === "dev" ? "http://192.168.241.200:8080/" : "http://bpms.everteam.us/"
config.bpms.project_path = "LaunchPointProcess_Processes_Core";
config.bpms.process_name="ProcessISOResponse";
config.bpms.pool_name="ISO_Response_Manager_ISO";

config.bpms.iso_response_wsdl = config.bpms.server + "everteam/ode/processes/"+config.bpms.project_path + "_" +
    config.bpms.process_name +"_" + config.bpms.pool_name + "?wsdl";

config.bpms.wsdl_service_name="Receive_ISO_ResponseRequest";

module.exports = config;