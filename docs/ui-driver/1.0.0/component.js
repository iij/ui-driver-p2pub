/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-p2pub/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    /* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated

    driverName: 'p2pub',

    //state manage variables of static data.
    gotStaticData: false,

    //assign method
    systemStorageAssign: 'new',
    dataStorageAssign: 'new',
    //view control.
    systemStorageDisable: '',
    ibaDisable: 'disabled',
    restoreImageDisable: 'disabled',
    ibbDisable: 'disabled',
    dataStorageDisable: '',

    willRender() {

      if (!this.get('gotStaticData')) {

        let staticData = {
          "systemStorageType": {
            "types": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "S30GB/CentOS7 ：64bit",
                "value": "S30GB_CENTOS7_64"
              },
              {
                "label": "S30GB/CentOS6 :64bit",
                "value": "S30GB_CENTOS6_64"
              },
              {
                "label": "S30GB/RHEL7 ：64bit",
                "value": "S30GB_RHEL7_64"
              },
              {
                "label": "S30GB/RHEL6 ：64bit",
                "value": "S30GB_RHEL6_64"
              },
              {
                "label": "S30GB/Ubuntu16 ：64bit",
                "value": "S30GB_UBUNTU16_64"
              },
              {
                "label": "S30GB/Ubuntu14 ：64bit",
                "value": "S30GB_UBUNTU14_64"
              }
            ]
          },
          "serverType": {
            "types": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "VB0-1",
                "value": "VB0-1"
              },
              {
                "label": "VB1-2",
                "value": "VB1-2"
              },
              {
                "label": "VB2-3",
                "value": "VB2-3"
              },
              {
                "label": "VB4-6",
                "value": "VB4-6"
              },
              {
                "label": "VB8-12",
                "value": "VB8-12"
              },
              {
                "label": "VB12-24",
                "value": "VB12-24"
              },
              {
                "label": "VB1-1",
                "value": "VB1-1"
              },
              {
                "label": "VB2-2",
                "value": "VB2-2"
              },
              {
                "label": "VB4-3",
                "value": "VB4-3"
              },
              {
                "label": "VB8-6",
                "value": "VB8-6"
              },
              {
                "label": "VB12-12",
                "value": "VB12-12"
              },
              {
                "label": "VB0-2",
                "value": "VB0-2"
              },
              {
                "label": "VB1-3",
                "value": "VB1-3"
              },
              {
                "label": "VB2-6",
                "value": "VB2-6"
              },
              {
                "label": "VB4-12",
                "value": "VB4-12"
              },
              {
                "label": "VB8-24",
                "value": "VB8-24"
              },
              {
                "label": "VD16-96-SSD",
                "value": "VD16-96-SSD"
              },
              {
                "label": "VD16-192-FIPX",
                "value": "VD16-192-FIPX"
              },
              {
                "label": "VG1-3",
                "value": "VG1-3"
              },
              {
                "label": "VG2-6",
                "value": "VG2-6"
              },
              {
                "label": "VG4-12",
                "value": "VG4-12"
              },
              {
                "label": "VG6-24",
                "value": "VG6-24"
              },
              {
                "label": "VG8-32",
                "value": "VG8-32"
              },
              {
                "label": "VG12-48",
                "value": "VG12-48"
              },
              {
                "label": "VG2-3",
                "value": "VG2-3"
              },
              {
                "label": "VG4-6",
                "value": "VG4-6"
              },
              {
                "label": "VG6-12",
                "value": "VG6-12"
              },
              {
                "label": "VG8-24",
                "value": "VG8-24"
              },
              {
                "label": "VG12-32",
                "value": "VG12-32"
              },
              {
                "label": "VG1-6",
                "value": "VG1-6"
              },
              {
                "label": "VG2-12",
                "value": "VG2-12"
              },
              {
                "label": "VG4-24",
                "value": "VG4-24"
              },
              {
                "label": "VG6-32",
                "value": "VG6-32"
              },
              {
                "label": "VG8-48",
                "value": "VG8-48"
              }
            ]
          },
          "serverGroup": {
            "groups": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "A",
                "value": "A"
              },
              {
                "label": "B",
                "value": "B"
              }
            ]
          },
          "dataStorageType": {
            "types": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "G100GB：IOPS1000",
                "value": "G100GB_IOPS1000"
              },
              {
                "label": "G100GB：IOPS2000",
                "value": "G100GB_IOPS2000"
              },
              {
                "label": "G300GB：IOPS1000",
                "value": "G300GB_IOPS1000"
              },
              {
                "label": "G300GB：IOPS2000",
                "value": "G300GB_IOPS2000"
              },
              {
                "label": "G300GB：IOPS3000",
                "value": "G300GB_IOPS3000"
              },
              {
                "label": "G500GB：IOPS2000",
                "value": "G500GB_IOPS2000"
              },
              {
                "label": "G500GB：IOPS3000",
                "value": "G500GB_IOPS3000"
              },
              {
                "label": "G500GB：IOPS4000",
                "value": "G500GB_IOPS4000"
              },
              {
                "label": "G1000GB：IOPS3000",
                "value": "G1000GB_IOPS3000"
              },
              {
                "label": "G1000GB：IOPS4000",
                "value": "G1000GB_IOPS4000"
              },
              {
                "label": "G1000GB：IOPS5000",
                "value": "G1000GB_IOPS5000"
              },
              {
                "label": "B100GB",
                "value": "B100GB"
              },
              {
                "label": "B300GB",
                "value": "B300GB"
              },
              {
                "label": "B500GB",
                "value": "B500GB"
              },
              {
                "label": "B1000GB",
                "value": "B1000GB"
              }
            ]
          },
          "storageGroup": {
            "groups": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "Y",
                "value": "Y"
              },
              {
                "label": "Z",
                "value": "Z"
              }
            ]
          }
        };

        this.set('model.static', staticData);
        this.set('gotStaticData', true)
      }
    },

    bootstrap: function () {
      let config = this.get('store').createRecord({
        type: 'p2pubConfig',
        //Account
        gis: '',
        accessKey: '',
        secretKey: '',

        //Instance
        serverType: '',
        serverGroup: '',
        ivm: '', //dose not set value.

        //storage group
        storageGroup: '',

        //System Dtorage
        imageName: '',//NEW SYSTEM Image
        iba: '', //Attach Already existing storage
        customImage: '', //CustomeImgae ID(format iarXXXXX,nnnnn)
        iar:'',
        customImageId: '',
        //restoreId: '',//Restore

        //Data Storage
        ibb: '',
        dataStorage: '',

        //Network
        privateMode: '',
        dockerPort: 2376,

        extraPorts: "500/udp,4500/udp",
        replyAnyArp: true
      });

      let type = 'host';
      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        'p2pubConfig': config,
      }));
    },
    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors') || [];

      // Add more specific errors

      // mandatory
      if (!this.get('model.p2pubConfig.gis')) {
        errors.push('Service Code is required');
      }

      if (!this.get('model.p2pubConfig.accessKey')) {
        errors.push('Access Key ID is required');
      }

      if (!this.get('model.p2pubConfig.secretKey')) {
        errors.push('Secret Key is required');
      }

      var systemStorageAssignMethod = this.get('systemStorageAssign');

      switch (systemStorageAssignMethod) {
        case 'new' :
          this.set('model.p2pubConfig.iba', '');
          this.set('model.p2pubConfig.customImage', '');
          this.set('model.p2pubConfig.iar', '');
          this.set('model.p2pubConfig.customImageId', '');
          break;
        case 'restore' :
          var chkError = false;
          if (!this.get('model.p2pubConfig.iar')) {
            errors.push('Storage Archive Service Code is required');
            chkError = true;
          }
          if (!this.get('model.p2pubConfig.customImageId')) {
            errors.push('Storage Archive Image ID is required');
            chkError = true;
          }
          if(chkError) {
            break;
          }
          this.set('model.p2pubConfig.customImage',
            this.get('model.p2pubConfig.iar')
            + ","
            +this.get('model.p2pubConfig.customImageId'));

          this.set('model.p2pubConfig.iba', '');
          this.set('model.p2pubConfig.imageName', '');
          this.$('#systemStorageSB').each(function () {
            this.selectedIndex = 0;
          });
          break;
        case 'assign' :
          if (!this.get('model.p2pubConfig.iba')) {
            errors.push('System Storage Service Code is required');
            break;
          }
          this.set('model.p2pubConfig.imageName', '');
          this.set('model.p2pubConfig.customImage', '');
          this.set('model.p2pubConfig.iar', '');
          this.set('model.p2pubConfig.customImageId', '');
          this.$('#systemStorageSB').each(function () {
            this.selectedIndex = 0;
          });
          break;
      }

      var dataStorageAssignMethod = this.get('dataStorageAssign');

      switch (dataStorageAssignMethod) {
        case 'new' :
          this.set('model.p2pubConfig.ibb', '');
          break;
        case 'assign' :
          if (!this.get('model.p2pubConfig.ibb')) {
            errors.push('Data Storage Type is required');
            break;
          }
          this.set('model.p2pubConfig.imageName', '');
          this.$('#dataStorageSB').each(function () {
            this.selectedIndex = 0;
          });
          break;
      }
      //for debug
      console.debug('gis=' + this.get('model.p2pubConfig.gis'));
      console.debug('accessKey=' + this.get('model.p2pubConfig.accessKey'));
      console.debug('secretKey=' + this.get('model.p2pubConfig.secretKey'));
      console.debug('serverType=' + this.get('model.p2pubConfig.serverType'));
      console.debug('serverGroup=' + this.get('model.p2pubConfig.serverGroup'));
      console.debug('ivm=' + this.get('model.p2pubConfig.ivm'));
      console.debug('storageGroup=' + this.get('model.p2pubConfig.storageGroup'));
      console.debug('imageName=' + this.get('model.p2pubConfig.imageName'));
      console.debug('iba=' + this.get('model.p2pubConfig.iba'));

      console.debug('customImage=' + this.get('model.p2pubConfig.customImage'));
      console.debug('iar=' + this.get('model.p2pubConfig.iar'));
      console.debug('customImageId=' + this.get('model.p2pubConfig.customImageId'));

      console.debug('ibb=' + this.get('model.p2pubConfig.ibb'));
      console.debug('dataStorage=' + this.get('model.p2pubConfig.dataStorage'));
      console.debug('privateMode=' + this.get('model.p2pubConfig.privateMode'));
      console.debug('iba=' + this.get('model.p2pubConfig.iba'));
      console.debug('dockerPort=' + this.get('model.p2pubConfig.dockerPort'));

      console.debug('extraPorts=' + this.get('model.p2pubConfig.extraPorts'));
      console.debug('replyAnyArp=' + this.get('model.p2pubConfig.replyAnyArp'));

      // Check something and add an error entry if it fails:
      if (parseInt(this.get('model.p2pubConfig.size'), 10) < 1024) {
        errors.push('Size must be at least 1024 MB');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if (errors.get('length')) {
        this.set('errors', errors);
        return false;
      }
      else {
        this.set('errors', null);
        return true;
      }
    },
    actions: {
      selectStorageAttach: function (value) {
        switch (value) {
          case 'new':
            this.set('systemStorageAssign', value);
            this.set('systemStorageDisable', '');
            this.set('ibaDisable', 'disabled');
            this.set('restoreImageDisable', 'disabled');
            break;
          case 'restore':
            this.set('systemStorageAssign', value);
            this.set('systemStorageDisable', 'disabled');
            this.set('ibaDisable', 'disabled');
            this.set('restoreImageDisable', '');
            break;
          case 'assign':
            this.set('systemStorageAssign', value);
            this.set('systemStorageDisable', 'disabled');
            this.set('ibaDisable', '');
            this.set('restoreImageDisable', 'disabled');
            break;
        }
      },
      selectDataStorageAttach: function (value) {
        switch (value) {
          case 'new':
            this.set('dataStorageAssign', value);
            this.set('dataStorageDisable', '');
            this.set('ibbDisable', 'disabled');
            break;
          case 'assign':
            this.set('dataStorageAssign', value);
            this.set('dataStorageDisable', 'disabled');
            this.set('ibbDisable', '');
            break;
        }
      },
      selectImageType: function (value) {
        console.debug('imageType=' + value);
        this.set('model.p2pubConfig.imageName', value)
      },
      selectServerType: function (value) {
        console.debug('serverType=' + value);
        this.set('model.p2pubConfig.serverType', value)
      },
      selectServerGroup: function (value) {
        //console.debug('serverGroup=' + value);
        this.set('model.p2pubConfig.serverGroup', value)
      },
      selectStorageGroup: function (value) {
        console.debug('storageGroup=' + value);
        this.set('model.p2pubConfig.storageGroup', value)
      },
      selectDataStorageType: function (value) {
        console.debug('dataStorageType=' + value);
        this.set('model.p2pubConfig.dataStorage', value)
      }
    },
  });
});
;
define("ui/components/machine/driver-p2pub/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 56,
            "column": 10
          },
          "end": {
            "line": 58,
            "column": 10
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"class","form-control");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element4, 'value');
        morphs[1] = dom.createMorphAt(element4,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","q.value",["loc",[null,[57,50],[57,57]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","q.label",["loc",[null,[57,61],[57,72]]],0,0,0,0]
      ],
      locals: ["q"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 70,
            "column": 10
          },
          "end": {
            "line": 72,
            "column": 10
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"class","form-control");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element3, 'value');
        morphs[1] = dom.createMorphAt(element3,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","q.value",["loc",[null,[71,50],[71,57]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","q.label",["loc",[null,[71,61],[71,72]]],0,0,0,0]
      ],
      locals: ["q"],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 92,
            "column": 10
          },
          "end": {
            "line": 94,
            "column": 10
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"class","form-control");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element2, 'value');
        morphs[1] = dom.createMorphAt(element2,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","q.value",["loc",[null,[93,50],[93,57]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","q.label",["loc",[null,[93,61],[93,72]]],0,0,0,0]
      ],
      locals: ["q"],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 129,
            "column": 10
          },
          "end": {
            "line": 131,
            "column": 10
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"class","form-control");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'value');
        morphs[1] = dom.createMorphAt(element1,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","q.value",["loc",[null,[130,50],[130,57]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","q.label",["loc",[null,[130,61],[130,72]]],0,0,0,0]
      ],
      locals: ["q"],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 207,
            "column": 8
          },
          "end": {
            "line": 209,
            "column": 8
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("          ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"class","form-control");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["concat",[["get","q.value",["loc",[null,[208,48],[208,55]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","q.label",["loc",[null,[208,59],[208,70]]],0,0,0,0]
      ],
      locals: ["q"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.9.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 281,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","horizontal-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Account Info");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Service Code(gis)*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Service Code of your IIJ GIO P2 contract.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Access Key ID*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Access Key of IIJ GIO P2.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 col-md-offset-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Secret Key*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Secret Key of IIJ GIO P2.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Server Instance");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Server Type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-3");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("GIO P2 Server Type. Price list is ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","https://www.iij.ad.jp/biz/p2/public/spec.html");
      dom.setAttribute(el6,"target","_blank");
      var el7 = dom.createTextNode("here");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(".");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 col-md-offset-1 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Server Group");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Specify \"A\" or \"B\". If you do not specify this value, group is selected automatically. (");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://manual.iij.jp/p2/pub/b-1-5.html");
      dom.setAttribute(el6,"target","_blank");
      var el7 = dom.createTextNode("detail");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(")");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Storage Group");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Storage Group");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Specify the Storage Group of System Storage and Data Storage. If you do not specify this\n          value, group is selected automatically. (\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://manual.iij.jp/p2/pub/b-3-4.html");
      dom.setAttribute(el6,"target","_blank");
      var el7 = dom.createTextNode("detail");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(")");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("System Storage");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("System Storage Assignment Method");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("option");
      dom.setAttribute(el6,"value","new");
      var el7 = dom.createTextNode("Attach new System Storage.");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("option");
      dom.setAttribute(el6,"value","restore");
      var el7 = dom.createTextNode("Restore from Storage Archive.");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("option");
      dom.setAttribute(el6,"value","assign");
      var el7 = dom.createTextNode("Attach existing System Storage.");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("System Storage Image");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      dom.setAttribute(el5,"id","systemStorageSB");
      var el6 = dom.createTextNode("\n\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("OS pre-installed boot image. Specify the\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://manual.iij.jp/p2/pubapi/59949023.html");
      dom.setAttribute(el6,"target","_blank");
      var el7 = dom.createTextNode("type");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" of image. (\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://manual.iij.jp/p2/pub/b-3-2-1.html");
      dom.setAttribute(el6,"target","_blank");
      var el7 = dom.createTextNode("detail");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("). If not specified, apply default S30GB/Ubuntu14 : 64bit");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("System Storage Service Code(iba)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Attach already existing system storage.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Storage Archive Service Code");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Specify your system archive service code.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Storage Archive Image ID");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Specify restore target of system archive image(ID).");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Data Storage");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Data Storage Assignment Method");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("option");
      dom.setAttribute(el6,"value","new");
      var el7 = dom.createTextNode("Attach new Data Storage.");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("option");
      dom.setAttribute(el6,"value","assign");
      var el7 = dom.createTextNode("Attach existing Data storage.");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Data Storage Type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      dom.setAttribute(el5,"id","dataStorageSB");
      var el6 = dom.createTextNode(">\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Specify the type of Data Storage.(\n          ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("a");
      dom.setAttribute(el6,"href","http://manual.iij.jp/p2/pub/b-3-2-2.html");
      dom.setAttribute(el6,"target","_blank");
      var el7 = dom.createTextNode("detail");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(")\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Data Storage Service Code(ibb)");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Attach already existing data storage.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Network");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Private Mode");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Does not attach global IP address. Specify a private IP address and a DNS server like this format \"Private IP address, DNS Server IP address\".");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Docker Port");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Additional open ports");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("p");
      dom.setAttribute(el5,"class","help-block");
      var el6 = dom.createTextNode("Specify open ports. Format is \"portNumber/protocol[udp/tcp],portNumber/protocol....\" ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element5 = dom.childAt(fragment, [0]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element6, [8]);
      var element8 = dom.childAt(element6, [12]);
      var element9 = dom.childAt(element8, [3, 1]);
      var element10 = dom.childAt(element8, [7, 1]);
      var element11 = dom.childAt(element6, [16, 3, 1]);
      var element12 = dom.childAt(element6, [20, 3, 1]);
      var element13 = dom.childAt(element6, [22]);
      var element14 = dom.childAt(element13, [3, 1]);
      var element15 = dom.childAt(element6, [24]);
      var element16 = dom.childAt(element6, [28, 3, 1]);
      var element17 = dom.childAt(element6, [30]);
      var element18 = dom.childAt(element17, [3, 1]);
      var element19 = dom.childAt(element6, [34]);
      var morphs = new Array(28);
      morphs[0] = dom.createMorphAt(element6,2,2);
      morphs[1] = dom.createMorphAt(dom.childAt(element6, [6, 3]),1,1);
      morphs[2] = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element7, [7]),1,1);
      morphs[4] = dom.createAttrMorph(element9, 'onchange');
      morphs[5] = dom.createMorphAt(element9,1,1);
      morphs[6] = dom.createAttrMorph(element10, 'onchange');
      morphs[7] = dom.createMorphAt(element10,1,1);
      morphs[8] = dom.createAttrMorph(element11, 'onchange');
      morphs[9] = dom.createMorphAt(element11,1,1);
      morphs[10] = dom.createAttrMorph(element12, 'onchange');
      morphs[11] = dom.createAttrMorph(element14, 'onchange');
      morphs[12] = dom.createAttrMorph(element14, 'disabled');
      morphs[13] = dom.createMorphAt(element14,1,1);
      morphs[14] = dom.createMorphAt(dom.childAt(element13, [7]),1,1);
      morphs[15] = dom.createMorphAt(dom.childAt(element15, [3]),1,1);
      morphs[16] = dom.createMorphAt(dom.childAt(element15, [7]),1,1);
      morphs[17] = dom.createAttrMorph(element16, 'onchange');
      morphs[18] = dom.createAttrMorph(element18, 'onchange');
      morphs[19] = dom.createAttrMorph(element18, 'disabled');
      morphs[20] = dom.createMorphAt(element18,1,1);
      morphs[21] = dom.createMorphAt(dom.childAt(element17, [7]),1,1);
      morphs[22] = dom.createMorphAt(dom.childAt(element19, [3]),1,1);
      morphs[23] = dom.createMorphAt(dom.childAt(element19, [7]),1,1);
      morphs[24] = dom.createMorphAt(dom.childAt(element6, [36, 3]),1,1);
      morphs[25] = dom.createMorphAt(element6,39,39);
      morphs[26] = dom.createMorphAt(element5,4,4);
      morphs[27] = dom.createMorphAt(element5,7,7);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[4,4],[4,33]]],0,0],
      ["inline","input",[],["type","text","class","form-control","maxlength",11,"placeholder","gisXXXXXXXX","value",["subexpr","@mut",[["get","model.p2pubConfig.gis",["loc",[null,[19,14],[19,35]]],0,0,0,0]],[],[],0,0]],["loc",[null,[15,8],[20,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","maxlength",20,"value",["subexpr","@mut",[["get","model.p2pubConfig.accessKey",["loc",[null,[33,14],[33,41]]],0,0,0,0]],[],[],0,0]],["loc",[null,[30,8],[34,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.secretKey",["loc",[null,[41,55],[41,82]]],0,0,0,0]],[],[],0,0]],["loc",[null,[41,8],[41,85]]],0,0],
      ["attribute","onchange",["subexpr","action",["selectServerType"],["value","target.value"],["loc",[null,[null,null],[55,96]]],0,0],0,0,0,0],
      ["block","each",[["get","model.static.serverType.types",["loc",[null,[56,18],[56,47]]],0,0,0,0]],[],0,null,["loc",[null,[56,10],[58,19]]]],
      ["attribute","onchange",["subexpr","action",["selectServerGroup"],["value","target.value"],["loc",[null,[null,null],[68,76]]],0,0],0,0,0,0],
      ["block","each",[["get","model.static.serverGroup.groups",["loc",[null,[70,18],[70,49]]],0,0,0,0]],[],1,null,["loc",[null,[70,10],[72,19]]]],
      ["attribute","onchange",["subexpr","action",["selectStorageGroup"],["value","target.value"],["loc",[null,[null,null],[90,77]]],0,0],0,0,0,0],
      ["block","each",[["get","model.static.storageGroup.groups",["loc",[null,[92,18],[92,50]]],0,0,0,0]],[],2,null,["loc",[null,[92,10],[94,19]]]],
      ["attribute","onchange",["subexpr","action",["selectStorageAttach"],["value","target.value"],["loc",[null,[null,null],[112,99]]],0,0],0,0,0,0],
      ["attribute","onchange",["subexpr","action",["selectImageType"],["value","target.value"],["loc",[null,[null,null],[126,74]]],0,0],0,0,0,0],
      ["attribute","disabled",["get","systemStorageDisable",["loc",[null,[126,86],[126,106]]],0,0,0,0],0,0,0,0],
      ["block","each",[["get","model.static.systemStorageType.types",["loc",[null,[129,18],[129,54]]],0,0,0,0]],[],3,null,["loc",[null,[129,10],[131,19]]]],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.iba",["loc",[null,[143,14],[143,35]]],0,0,0,0]],[],[],0,0],"disabled",["subexpr","@mut",[["get","ibaDisable",["loc",[null,[144,17],[144,27]]],0,0,0,0]],[],[],0,0],"maxlength",11,"placeholder","ibaXXXXXXXX"],["loc",[null,[141,8],[147,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.iar",["loc",[null,[160,14],[160,35]]],0,0,0,0]],[],[],0,0],"maxlength",11,"placeholder","iarXXXXXXXX","disabled",["subexpr","@mut",[["get","restoreImageDisable",["loc",[null,[163,17],[163,36]]],0,0,0,0]],[],[],0,0]],["loc",[null,[158,8],[164,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.customImageId",["loc",[null,[173,14],[173,45]]],0,0,0,0]],[],[],0,0],"maxlength",8,"disabled",["subexpr","@mut",[["get","restoreImageDisable",["loc",[null,[175,17],[175,36]]],0,0,0,0]],[],[],0,0]],["loc",[null,[171,8],[176,10]]],0,0],
      ["attribute","onchange",["subexpr","action",["selectDataStorageAttach"],["value","target.value"],["loc",[null,[null,null],[191,103]]],0,0],0,0,0,0],
      ["attribute","onchange",["subexpr","action",["selectDataStorageType"],["value","target.value"],["loc",[null,[null,null],[204,80]]],0,0],0,0,0,0],
      ["attribute","disabled",["get","dataStorageDisable",["loc",[null,[205,30],[205,48]]],0,0,0,0],0,0,0,0],
      ["block","each",[["get","model.static.dataStorageType.types",["loc",[null,[207,16],[207,50]]],0,0,0,0]],[],4,null,["loc",[null,[207,8],[209,17]]]],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.ibb",["loc",[null,[221,14],[221,35]]],0,0,0,0]],[],[],0,0],"disabled",["subexpr","@mut",[["get","ibbDisable",["loc",[null,[222,17],[222,27]]],0,0,0,0]],[],[],0,0],"maxlength",11,"placeholder","ibbXXXXXXXX"],["loc",[null,[219,8],[225,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.privateMode",["loc",[null,[240,14],[240,43]]],0,0,0,0]],[],[],0,0],"placeholder","X.X.X.X,Y.Y.Y.Y"],["loc",[null,[238,8],[242,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.dockerPort",["loc",[null,[251,14],[251,42]]],0,0,0,0]],[],[],0,0],"maxlength",5],["loc",[null,[249,8],[253,10]]],0,0],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.p2pubConfig.extraPorts",["loc",[null,[264,14],[264,42]]],0,0,0,0]],[],[],0,0]],["loc",[null,[262,8],[265,10]]],0,0],
      ["inline","partial",["host/add-options"],[],["loc",[null,[272,4],[272,34]]],0,0],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[276,22],[276,28]]],0,0,0,0]],[],[],0,0]],["loc",[null,[276,2],[276,30]]],0,0],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[279,2],[279,45]]],0,0]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4]
  };
}()));;

});
