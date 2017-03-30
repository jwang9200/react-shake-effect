import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {Panel, Button} from "react-bootstrap";
import Highlight from "react-syntax-highlight";
import Formfields from "react-form-fields";
import Shake from "react-shake-effect";
//
import {fetchShakeHtml} from "../actions/actions";
import {fetchShakePropsexampleJs} from "../actions/actions";
import {fetchShakeMethodsexampleJs} from "../actions/actions";
import {fetchShakePropsDemoexampleJson} from "../actions/actions";
import {fetchShakeCssDemoexampleCss} from "../actions/actions";
import {fetchShakeDeployexampleHtml} from "../actions/actions";
import BackgroundCanvas from "../components/background-canvas";
import {updateState} from "../toolbox/toolbox";
import ReactGA from "react-ga";
//
class ShakeLanding extends Component
{
	//*************************
	//*************************
	// Standard Methods
	//
	constructor(props)
	{
	    super(props);
	}
	getChildContext()
	{
		// empty
	}
	getInitialState()
	{
		return({});
	}
	componentWillMount()
	{
		this.props.fetchShakeHtml();
		this.props.fetchShakePropsexampleJs();
		this.props.fetchShakeMethodsexampleJs();
		this.props.fetchShakePropsDemoexampleJson();
		this.props.fetchShakeCssDemoexampleCss();
		this.props.fetchShakeDeployexampleHtml();
	}
	componentWillUnmount()
	{
		// empty
	}
	componentDidMount()
	{
		let scopeProxy
			= this;
		let setViewLoaded
			= scopeProxy.context.setViewLoaded;
		let setLayoutMode
			= scopeProxy.context.setLayoutMode;
		let updateNavigationState
			= scopeProxy.context.updateNavigationState;
		let navigationSection
			= 0;
		//
		window.requestAnimationFrame(()=>
		{
			// Updating the section index this way lets the
			// state of the nagigation cluster fully initialize
			// before the activeKey value is updated. This is
			// necessary for it to be possible to navigate
			// back to the wares section from within a component
			// landing page when the component landing page is
			// directly accessed via the url bar in the browser.
			updateNavigationState(navigationSection);
		});
		let setviewTimeout =
			setTimeout(function()
			{
				setViewLoaded(true);
				setLayoutMode("full");
			},
			500);
		//
		updateState(scopeProxy,
		{
			"Ready":false,
			"Sandbox":
			{
				"Profile":
				{
					"Portal":
					{
						"Distort":
						{
							"Perspective":"500px"
						},
						"Oscillate":
						{
							"Displace":"60deg",
							"Friction":"1",
							"Speed":"5",
							"Duration":"1500",
							"Axis":"x"
						}
					},
					"Report":
					{
						"Start":(event)=>
						{
							// empty
						},
						"Change":(event)=>
						{
							// empty
						},
						"Complete":(event)=>
						{
							// empty
						},
						"Ready":(event)=>
						{
							// empty
						}
					}
				}
			}
		});
	}
	componentWillUpdate()
	{
		// empty
	}
	componentDidUpdate()
	{
		let scopeProxy
			= this;
		//
		window.requestAnimationFrame(function()
		{
			if(scopeProxy.state !== undefined
			&& scopeProxy.state.Ready === false)
			{
				updateState(scopeProxy,
				{
					"Ready":true
				});
				document.getElementById("shakedisplace-input-field").value
				= "45deg";
				document.getElementById("shakefriction-input-field").value
				= "2";
				document.getElementById("shakespeed-input-field").value
				= "8";
				document.getElementById("shakeduration-input-field").value
				= "2000";
				document.getElementById("shakeaxis-input-field").value
				= "z";
				document.getElementById("shakedistort-input-field").value
				= "500px";
			}
		});
	}
	render()
	{
		let scopeProxy
			= this;
		let shakeHtml
			= scopeProxy.props.html;
		let jsonReady
			= true;
		let profileReady
			= true;
		let shakePropsDemoExample
			= (scopeProxy.props.shakePropsexampleJs !== undefined
			&& scopeProxy.props.shakePropsexampleJs !== null)
			? scopeProxy.props.shakePropsexampleJs
			: "loading...";
		let shakeMethodsDemoExample
			= (scopeProxy.props.shakeMethodsexampleJs !== undefined
			&& scopeProxy.props.shakeMethodsexampleJs !== null)
			? scopeProxy.props.shakeMethodsexampleJs
			: "loading...";
		let shakePropsExample
			= (scopeProxy.props.shakePropsDemoexampleJson !== undefined
			&& scopeProxy.props.shakePropsDemoexampleJson !== null)
			? scopeProxy.props.shakePropsDemoexampleJson
			: "loading...";
		let shakeCssDemoExample
			= (scopeProxy.props.shakeCssDemoexampleCss !== undefined
			&& scopeProxy.props.shakeCssDemoexampleCss !== null)
			? scopeProxy.props.shakeCssDemoexampleCss
			: "loading...";
		let shakeDeployExample
			= (scopeProxy.props.shakeDeployexampleHtml !== undefined
			&& scopeProxy.props.shakeDeployexampleHtml !== null)
			? scopeProxy.props.shakeDeployexampleHtml
			: "loading...";
		//
		let linearaxisProfile =
			{
				"Portal":
				{
					"Distort":
					{
						"Perspective":"500px"
					},
					"Oscillate":
					{
						"Displace":"40px",
						"Friction":"1",
						"Speed":"5",
						"Duration":"1500",
						"Axis":"x"
					}
				},
				"Report":
				{
					"Start":(event)=>
					{
						// empty
					},
					"Change":(event)=>
					{
						// empty
					},
					"Complete":(event)=>
					{
						// empty
					},
					"Ready":(event)=>
					{
						// empty
					}
				}
			}
		//
		let radialaxisProfile =
			{
				"Portal":
				{
					"Distort":
					{
						"Perspective":"500px"
					},
					"Oscillate":
					{
						"Displace":"60deg",
						"Friction":"1",
						"Speed":"5",
						"Duration":"1500",
						"Axis":"x"
					}
				},
				"Report":
				{
					"Start":(event)=>
					{
						// empty
					},
					"Change":(event)=>
					{
						// empty
					},
					"Complete":(event)=>
					{
						// empty
					},
					"Ready":(event)=>
					{
						// empty
					}
				}
			}
		//
		let sandboxProfileOnMount =
			{
				"Portal":
				{
					"Distort":
					{
						"Perspective":"500px"
					},
					"Oscillate":
					{
						"Displace":"60deg",
						"Friction":"1",
						"Speed":"5",
						"Duration":"1500",
						"Axis":"x"
					}
				},
				"Report":
				{
					"Start":(event)=>
					{
						// empty
					},
					"Change":(event)=>
					{
						// empty
					},
					"Complete":(event)=>
					{
						// empty
					},
					"Ready":(event)=>
					{
						// empty
					}
				}
			}
		//
		let shakedisplaceInputProfile =
			{
				"tag":"input",
				"validation":false,
				"errorMsg":"",
				"required":true,
				"attributes":
				{
					"type":"text",
					"placeholder":"Displace",
					"name":"shakedisplace-input",
					"id":"shakedisplace-input-field",
					"className":"sandbox-formfield-input"
				},
				"onChange":scopeProxy.updateSandboxProfile.bind(scopeProxy)
			}
		//
		let shakefrictionInputProfile =
			{
				"tag":"input",
				"validation":false,
				"errorMsg":"",
				"required":true,
				"attributes":
				{
					"type":"text",
					"placeholder":"Friction",
					"name":"shakefriction-input",
					"id":"shakefriction-input-field",
					"className":"sandbox-formfield-input"
				},
				"onChange":scopeProxy.updateSandboxProfile.bind(scopeProxy)
			}
		//
		let shakespeedInputProfile =
			{
				"tag":"input",
				"validation":"alphanumeric",
				"errorMsg":"alphanumeric only",
				"required":true,
				"attributes":
				{
					"type":"text",
					"placeholder":"Speed",
					"name":"shakespeed-input",
					"id":"shakespeed-input-field",
					"className":"sandbox-formfield-input"
				},
				"onChange":scopeProxy.updateSandboxProfile.bind(scopeProxy)
			}
		//
		let shakedurationInputProfile =
			{
				"tag":"input",
				"validation":"alphanumeric",
				"errorMsg":"alphanumeric only",
				"required":true,
				"attributes":
				{
					"type":"text",
					"placeholder":"Duration",
					"name":"shakeduration-input",
					"id":"shakeduration-input-field",
					"className":"sandbox-formfield-input"
				},
				"onChange":scopeProxy.updateSandboxProfile.bind(scopeProxy)
			}
		//
		let shakeaxisInputProfile =
			{
				"tag":"input",
				"validation":"alphanumeric",
				"errorMsg":"alphanumeric only",
				"required":true,
				"attributes":
				{
					"type":"text",
					"placeholder":"x | y | z",
					"name":"shakeaxis-input",
					"id":"shakeaxis-input-field",
					"className":"sandbox-formfield-input"
				},
				"onChange":scopeProxy.updateSandboxProfile.bind(scopeProxy)
			}
		//
		let shakedistortInputProfile =
			{
				"tag":"input",
				"validation":"alphanumeric",
				"errorMsg":"alphanumeric only",
				"required":true,
				"attributes":
				{
					"type":"text",
					"placeholder":"Distort",
					"name":"shakedistort-input",
					"id":"shakedistort-input-field",
					"className":"sandbox-formfield-input"
				},
				"onChange":scopeProxy.updateSandboxProfile.bind(scopeProxy)
			}
		//
		let backgroundcanvasProfile =
			{
				"Background":
				{
					"Color":"rgba(245,245,255,1)"
				},
				"Watermark":
				{
					"Name":"shake",
					"Image":"anvil-watermark-filtered_480x363.png"
				}
			}
		//
		let sandboxProfile
			= _.has(scopeProxy, "state.Sandbox.Profile")
			? scopeProxy.state.Sandbox.Profile
			: sandboxProfileOnMount;
		//
		if(jsonReady === true
		&& profileReady === true)
		{
			return(
				<div id="wares-landing-container" ref="wareslanding" className="wares-landing">
					<div id="wares-landing-content-conainer" ref="wareslandingcontent" className="wares-landing-content">
						<div id="ware-introduction-container" ref="wareintroduction" className="ware-introduction">
							<div id="ware-landing-html-container" ref="warelandinghtml" dangerouslySetInnerHTML={{"__html":shakeHtml}} className="ware-landing-html"/>
						</div>
						<div id="ware-properties-detail-container" className="ware-properties-detail">
							<Panel collapsible defaultExpanded={false} header="Properties (props)" className="detail-heading">
								<Highlight lang="json" value={shakePropsExample}/>
							</Panel>
						</div>
						<div id="ware-properties-detail-container" className="ware-properties-detail">
							<Panel collapsible defaultExpanded={false} header="Methods" className="detail-heading">
								<Highlight lang="js" value={"let shakesampleRef = this.refs.linearyaxis;"}/>
								<hr/>
								<Highlight lang="js" value={shakeMethodsDemoExample}/>
							</Panel>
						</div>
						<div id="ware-properties-detail-container" className="ware-properties-detail">
							<Panel collapsible defaultExpanded={false} header="Demo Properties (props)" className="detail-heading">
								<Highlight lang="js" value={shakePropsDemoExample}/>
							</Panel>
						</div>
						<div id="ware-properties-detail-container" className="ware-properties-detail">
							<Panel collapsible defaultExpanded={false} header="Demo Styles (css)" className="detail-heading">
								<Highlight lang="css" value={shakeCssDemoExample}/>
							</Panel>
						</div>
						<div id="ware-properties-detail-container" className="ware-properties-detail">
							<Panel collapsible defaultExpanded={true} header="Deploy" className="detail-heading">
								<Highlight lang="jsx" value={"npm install react-shake-effect -s"}/>
								<hr/>
								<Highlight lang="js" value={"import Shake from 'react-shake-effect';"}/>
								<hr/>
								<Highlight lang="html" value={shakeDeployExample}/>
							</Panel>
						</div>
						<div id="shake-showcase-container" ref="shakeshowcase" className="shake-showcase">
							<div id="shake-heading-container" ref="shakeheading" className="shake-heading">
								<div id="shake-heading-headline-container" ref="shakeheadingheadline" className="shake-heading-headline">
									Demo
								</div>
							</div>
							<hr/>
							<div id="shake-axislinear-container" className="shake-axis">
								<div id="shakeaxis-title-container" className="shakeaxis-title">Linear Motion</div>
								<div id="shake-demo-horizontal-host-container" className="shake-demo-host">
									<div id="shake-demo-title-container" className="shake-demo-title">X-Axis</div>
									<Button className="shake-activate-button" onClick={scopeProxy.applyLinearxShake.bind(this, "x")}>Shake</Button>
									<div id="shake-card-xaxis-container" className="shake-card">
										<Shake id="linear-xaxis-container" ref="linearxaxis" {...linearaxisProfile}>
											<div id="shake-cardtarget-linearxaxis-container" className="shake-cardtarget"></div>
										</Shake>
									</div>
								</div>
								<div id="shake-demo-vertical-host-container" className="shake-demo-host">
									<div id="shake-demo-title-container" className="shake-demo-title">Y-Axis</div>
									<Button className="shake-activate-button" onClick={scopeProxy.applyLinearyShake.bind(this, "y")}>Shake</Button>
									<div id="shake-card-yaxis-container" className="shake-card">
										<Shake id="linear-yaxis-container" ref="linearyaxis" {...linearaxisProfile}>
											<div id="shake-cardtarget-linearyaxis-container" className="shake-cardtarget"></div>
										</Shake>
									</div>
								</div>
								<div id="shake-demo-radial-host-container" className="shake-demo-host">
									<div id="shake-demo-title-container" className="shake-demo-title">Z-Axis</div>
									<Button className="shake-activate-button" onClick={scopeProxy.applyLinearzShake.bind(this, "z")}>Shake</Button>
									<div id="shake-card-zaxis-container" className="shake-card">
										<Shake id="linear-zaxis-container" ref="linearzaxis" {...linearaxisProfile}>
											<div id="shake-cardtarget-linearzaxis-container" className="shake-cardtarget"></div>
										</Shake>
									</div>
								</div>
							</div>
							<hr/>
							<div id="shake-axislinear-container" className="shake-axis">
								<div id="shakeaxis-title-container" className="shakeaxis-title">Radial Motion</div>
								<div id="shake-demo-horizontal-host-container" className="shake-demo-host">
									<div id="shake-demo-title-container" className="shake-demo-title">X-Axis</div>
									<Button className="shake-activate-button" onClick={scopeProxy.applyRadialxShake.bind(this, "x")}>Shake</Button>
									<div id="shake-card-xaxis-container" className="shake-card">
										<Shake id="radial-xaxis-container" ref="radialxaxis" {...radialaxisProfile}>
											<div id="shake-cardtarget-radialxaxis-container" className="shake-cardtarget"></div>
										</Shake>
									</div>
								</div>
								<div id="shake-demo-vertical-host-container" className="shake-demo-host">
									<div id="shake-demo-title-container" className="shake-demo-title">Y-Axis</div>
									<Button className="shake-activate-button" onClick={scopeProxy.applyRadialyShake.bind(this, "y")}>Shake</Button>
									<div id="shake-card-yaxis-container" className="shake-card">
										<Shake id="radial-yaxis-container" ref="radialyaxis" {...radialaxisProfile}>
											<div id="shake-cardtarget-radialyaxis-container" className="shake-cardtarget"></div>
										</Shake>
									</div>
								</div>
								<div id="shake-demo-radial-host-container" className="shake-demo-host">
									<div id="shake-demo-title-container" className="shake-demo-title">Z-Axis</div>
									<Button className="shake-activate-button" onClick={scopeProxy.applyRadialzShake.bind(this, "z")}>Shake</Button>
									<div id="shake-card-zaxis-container" className="shake-card">
										<Shake id="radial-zaxis-container" ref="radialzaxis" {...radialaxisProfile}>
											<div id="shake-cardtarget-radialzaxis-container" className="shake-cardtarget"></div>
										</Shake>
									</div>
								</div>
							</div>
							<hr/>
							<div id="shake-axislinear-container" className="shake-axis">
								<div id="shakeaxis-title-container" className="shakeaxis-title">Sandbox</div>
								<div id="shake-sandbox-host-container" className="shake-sandbox-host">
									<div id="shake-sandbox-container" className="shake-sandbox">
										<Button className="shake-activate-button" onClick={scopeProxy.applySandboxShake.bind(this)}>Shake</Button>
										<div id="shake-demo-title-container" className="shake-demo-title">Profile</div>
										<div id="shake-profilefields-container" className="shake-profilefields">
											<div id="profilefields-left-container" className="profilefields-column">
												<div id="profilefield-host-container" className="profilefield-host">
													<div id="profilefield-label-container" className="profilefield-label">dist | degrees</div>
													<Formfields {...shakedisplaceInputProfile}/>
												</div>
												<div id="profilefield-host-container" className="profilefield-host">
													<div id="profilefield-label-container" className="profilefield-label">num | 0 = continuous</div>
													<Formfields {...shakefrictionInputProfile}/>
												</div>
												<div id="profilefield-host-container" className="profilefield-host">
													<div id="profilefield-label-container" className="profilefield-label">num | frequency</div>
													<Formfields {...shakespeedInputProfile}/>
												</div>
											</div>
											<div id="profilefields-right-container" className="profilefields-column">
												<div id="profilefield-host-container" className="profilefield-host">
													<div id="profilefield-label-container" className="profilefield-label">ms | lifespan</div>
													<Formfields {...shakedurationInputProfile}/>
												</div>
												<div id="profilefield-host-container" className="profilefield-host">
													<div id="profilefield-label-container" className="profilefield-label">axis of motion</div>
													<Formfields {...shakeaxisInputProfile}/>
												</div>
												<div id="profilefield-host-container" className="profilefield-host">
													<div id="profilefield-label-container" className="profilefield-label">dist | perspective</div>
													<Formfields {...shakedistortInputProfile}/>
												</div>
											</div>
										</div>
										<div id="shake-sandbox-card-host-container" className="shake-sandbox-card-host">
											<div id="shake-sandbox-card-container" className="shake-sandbox-card">
												<Shake id="sandbox-shake-container" ref="sandboxshake" {...sandboxProfile}>
													<div id="shake-cardtarget-sandbox-container" className="shake-sandbox-cardtarget"></div>
												</Shake>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<BackgroundCanvas ref="backgroundcanvas" {...backgroundcanvasProfile}/>
				</div>
			);
		}
		else
		{
			return(
				<div id="wares-landing-container" ref="wareslanding" className="wares-landing">
					"Loading Shake Content..."
				</div>
			);
		}
	}
	//*************************
	//*************************
	// Specialized Methods
	//
	applyLinearxShake(shakeAxis)
	{
		let linearxaxisRef
			= this.refs.linearxaxis;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"linear-x_shake"
		});
		linearxaxisRef.applyShake(shakeAxis);
	}
	applyLinearyShake(shakeAxis)
	{
		let linearyaxisRef
			= this.refs.linearyaxis;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"linear-y_shake"
		});
		linearyaxisRef.applyShake(shakeAxis);
	}
	applyLinearzShake(shakeAxis)
	{
		let linearzaxisRef
			= this.refs.linearzaxis;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"linear-z_shake"
		});
		linearzaxisRef.applyShake(shakeAxis);
	}
	applyRadialxShake(shakeAxis)
	{
		let radialxaxisRef
			= this.refs.radialxaxis;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"radial-x_shake"
		});
		radialxaxisRef.applyShake(shakeAxis);
	}
	applyRadialyShake(shakeAxis)
	{
		let radialyaxisRef
			= this.refs.radialyaxis;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"radial-y_shake"
		});
		radialyaxisRef.applyShake(shakeAxis);
	}
	applyRadialzShake(shakeAxis)
	{
		let radialzaxisRef
			= this.refs.radialzaxis;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"radial-z_shake"
		});
		radialzaxisRef.applyShake(shakeAxis);
	}
	applySandboxShake()
	{
		let scopeProxy
			= this;
		let sandboxshakeRef
			= this.refs.sandboxshake;
		let shakeDisplace
			= document.getElementById("shakedisplace-input-field").value;
		let shakeFriction
			= document.getElementById("shakefriction-input-field").value;
		let shakeSpeed
			= document.getElementById("shakespeed-input-field").value;
		let shakeDuration
			= document.getElementById("shakeduration-input-field").value;
		let shakeAxis
			= document.getElementById("shakeaxis-input-field").value;
		let shakeDistort
			= document.getElementById("shakedistort-input-field").value;
		//
		ReactGA.event(
		{
		  "category":"shake_action",
		  "action":"shake_clicked",
		  "label":"sandbox_shake"
		});
		updateState(scopeProxy,
		{
			"Sandbox":
			{
				"Profile":
				{
					"Portal":
					{
						"Distort":
						{
							"Perspective":shakeDistort
						},
						"Oscillate":
						{
							"Displace":shakeDisplace,
							"Friction":shakeFriction,
							"Speed":shakeSpeed,
							"Duration":shakeDuration,
							"Axis":shakeAxis
						}
					}
				}
			}
		});
		let shakeTimeout =
			setTimeout(function()
			{
				sandboxshakeRef.applyShake(shakeAxis);
			},
			250);
		//
	}
	updateSandboxProfile()
	{
		let scopeProxy
			= this;
		let sandboxshakeRef
			= this.refs.sandboxshake;
		let shakeDisplace
			= document.getElementById("shakedisplace-input-field").value;
		let shakeFriction
			= document.getElementById("shakefriction-input-field").value;
		let shakeSpeed
			= document.getElementById("shakespeed-input-field").value;
		let shakeDuration
			= document.getElementById("shakeduration-input-field").value;
		let shakeAxis
			= document.getElementById("shakeaxis-input-field").value;
		let shakeDistort
			= document.getElementById("shakedistort-input-field").value;
		//
		updateState(scopeProxy,
		{
			"Sandbox":
			{
				"Profile":
				{
					"Portal":
					{
						"Distort":
						{
							"Perspective":shakeDistort
						},
						"Oscillate":
						{
							"Displace":shakeDisplace,
							"Friction":shakeFriction,
							"Speed":shakeSpeed,
							"Duration":shakeDuration,
							"Axis":shakeAxis
						}
					}
				}
			}
		});
	}
	//*************************
	//*************************
	// Assignments
	//
	static contextTypes =
		{
			"transitionBody":PropTypes.func,
			"updateNavigationState":PropTypes.func,
			"setViewLoaded":PropTypes.func,
			"setLayoutMode":PropTypes.func
		}
	//
}
function mapAxiosstateToReactprops(axiosState)
{
	// This function is only called when the axios
	// response updates the application state. Once
	// this function is called, the component state
	// is updated which causes the render() function
	// to execute.
	return(
	{
		// When the application state (state.posts.all) is
		// updated by the axios promise, the promise response
		// is assigned the component state this.content.posts.
		"html":axiosState.content.html,
		"shakePropsexampleJs":axiosState.content.shakePropsexampleJs,
		"shakeMethodsexampleJs":axiosState.content.shakeMethodsexampleJs,
		"shakePropsDemoexampleJson":axiosState.content.shakePropsDemoexampleJson,
		"shakeCssDemoexampleCss":axiosState.content.shakeCssDemoexampleCss,
		"shakeDeployexampleHtml":axiosState.content.shakeDeployexampleHtml
	});
}
export default connect(mapAxiosstateToReactprops,
{
	"fetchShakeHtml":fetchShakeHtml,
	"fetchShakePropsexampleJs":fetchShakePropsexampleJs,
	"fetchShakeMethodsexampleJs":fetchShakeMethodsexampleJs,
	"fetchShakePropsDemoexampleJson":fetchShakePropsDemoexampleJson,
	"fetchShakeCssDemoexampleCss":fetchShakeCssDemoexampleCss,
	"fetchShakeDeployexampleHtml":fetchShakeDeployexampleHtml
})(ShakeLanding);