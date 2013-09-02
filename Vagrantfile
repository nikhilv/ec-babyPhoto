# -*- mode: ruby -*-
# vi: set ft=ruby :

##
# Shell provisioner that installs
# mongodb
# nodejs
##

$script = <<SCRIPT
	echo I am provisioning...
	date > /etc/vagrant_provisioned_at
	sudo apt-get --assume-yes update
	sudo apt-get -y install python-software-properties python g++ make
	sudo add-apt-repository -y ppa:chris-lea/node.js
	sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
	echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/10gen.list
	sudo apt-get --assume-yes update
	sudo apt-get install mongodb-10gen	
	sudo apt-get -y install nodejs
	npm install -g express
	cd /vagrant
	npm install
	nohup node scripts/express-server.js > output.log &

SCRIPT

Vagrant.configure("2") do |config|

  # Name of the box
  config.vm.box = "precise32"

  # URL to get the box
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  
  # Specify shell provisioner
  config.vm.provision :shell, :inline => $script
  
  # hostname
  config.vm.hostname = "babyPhoto"
  
  # setup port forwarding
  config.vm.network :forwarded_port, guest: 8008, host: 8008
   
  # Virtual box specific configuration settings to use 2 cores and 2 gb memory
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048"]
	vb.customize ["modifyvm", :id, "--cpus", "2"]
	vb.customize ["modifyvm", :id, "--ioapic", "on"]
  end
    
end
