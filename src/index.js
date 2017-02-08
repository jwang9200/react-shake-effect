import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {VelocityComponent, VelocityTransitionGroup, velocityHelpers} from "velocity-react";
import {VelocityAnimate, VelocityUi} from "velocity-animate";
import _ from "lodash";
//
//*************************
//*************************
// Nonpublished Imports
//
function updateState(ScopeProxy, Parcel)
{
	let existingState
		= (ScopeProxy.state !== null)
		? _.cloneDeep(ScopeProxy.state)
		: {};
	let adjustedState
		= _.merge(existingState, _.cloneDeep(Parcel));
	//
	try
	{
		ScopeProxy.setState(adjustedState);
	}
	catch(event)
	{
		console.warn("::react-shake:problem::updateState:", event);
	}
}
function watch(Testfunction)
{
	let watchCore =
		{
			"Match":function(Target, Complete, ExpireAt)
			{
				let intervalCount
					= 0;
				let maximumAttempts
					= (ExpireAt !== undefined)
					? ExpireAt
					: 2000;
				//
				let watchInterval =
					setInterval(function()
					{
						if(Testfunction() === Target)
						{
							Complete();
							//
							clearInterval(watchInterval);
						}
						if(intervalCount >= maximumAttempts)
						{
							console.warn("react-shake.js::watch::exceeded watch limit timeout::action halted.")
							//
							clearInterval(watchInterval);
						}
						intervalCount++;
					},
					1);
				//
			}
		}
	//
	return watchCore;
}
//
//*************************
//*************************
// Exports
//
export default class Shake extends Component
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
		// empty
	}
	componentWillUnmount()
	{
		// empty
	}
	componentDidMount()
	{
		let scopeProxy
			= this;
		//
		updateState(scopeProxy,
		{
			"Ready":false,
			"Portal":
			{
				"Distort":
				{
					"Depth":this.props.Portal.Distort.Depth,
					"Perspective":this.props.Portal.Distort.Perspective
				},
				"Oscillate":
				{
					"Displace":this.props.Portal.Oscillate.Displace,
					"Friction":this.props.Portal.Oscillate.Friction,
					"Speed":this.props.Portal.Oscillate.Speed,
					"Duration":this.props.Portal.Oscillate.Duration,
					"Axis":this.props.Portal.Oscillate.Axis
				},
				"Velocity":
				{
					"Profile":
					{
						"runOnMount":false
					}
				}
			},
			"Report":
			{
				"Start":this.props.Report.Start,
				"Change":this.props.Report.Change,
				"Complete":this.props.Report.Complete,
				"Ready":this.props.Report.Ready
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
		let stateNormalized
			= (this.state !== null)
			? _.isMatch(this.state.Portal, this.props.Portal)
			: false;
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
				scopeProxy.props.Report.Ready(scopeProxy.props.children);
			}
		});
	}
	render()
	{
		let scopeProxy
			= this;
		let childId
			= this.props.children.props.id;
		let childElement
			= document.getElementById(childId);
		let shaketargetportalClassname
			= this.props.children.props.className;
		let portalPerspective
			= _.has(this, "state.Portal.Distort.Perspective")
			? this.state.Portal.Distort.Perspective
			: null;
		let portalmorphProfile
			= _.has(this, "state.Portal.Velocity.Profile")
			? this.state.Portal.Velocity.Profile
			: null;
		//
		let adjustedChildTransform
			= "translateX(0)".concat(
			" translateY(0)",
			" translateZ(0)",
			" rotateX(0)",
			" rotateY(0)",
			" rotateZ(0)");
		//
		let portalmorphStyle =
			{
				"display":"inline-block",
				"position":"absolute",
				"visibility":"0",
				"opacity":"0",
				"width":"0",
				"height":"0"
			}
		//
		let shaketargetportalStyle =
			{
				"margin":"0",
				"padding":"0",
				"perspective":portalPerspective,
				"transform-style":"preserve-3d",
				"border":"none",
				"background":"none",
				"background-attachment":"scroll",
				"background-blend-mode":"normal",
				"bakcground-clip":"border-box",
				"background-image":"none",
				"background-origin":"padding-box",
				"background-position":"0% 0%",
				"background-repeat":"repeat",
				"background-size":"auto",
				"background-color":"transparent"
			}
		//
		this.props.children.props.style
		= (this.props.children.props.style !== undefined)
		? this.props.children.props.style
		: {};
		//
		Object.assign(this.props.children.props.style,
		{
			"top":"0",
			"bottom":"0",
			"left":"0",
			"right":"0",
			"width":"100%",
			"height":"100%",
			"margin":"0",
			"transform":adjustedChildTransform
		});
		return(
			<div id="shaketarget-portal-container" ref="shaketargetportal" className={shaketargetportalClassname} style={shaketargetportalStyle}>
				{this.props.children}
				<VelocityComponent {...portalmorphProfile}>
					<div id="portal-morph-container" ref="portalmorph" style={portalmorphStyle}></div>
				</VelocityComponent>
			</div>
		);
	}
	//*************************
	//*************************
	// Specialized Methods
	//
	setListeners()
	{
		let scopeProxy
			= this;
	}
	applyShake(shakeAxis)
	{
		let scopeProxy
			= this;
		let childId
			= this.props.children.props.id;
		let childElement
			= document.getElementById(childId);
		let shakeDisplace
			= this.props.Portal.Oscillate.Displace;
		let shakeFriction
			= parseFloat(this.props.Portal.Oscillate.Friction);
		let shakeFrequency
			= parseFloat(this.props.Portal.Oscillate.Speed);
		let shakeDuration
			= parseFloat(this.props.Portal.Oscillate.Duration);
		let distanceUnit
			= shakeDisplace.match(/([A-Z,a-z])\w+/g)[0];
		let shakeMotion
			= (distanceUnit.toLowerCase() === "deg")
			? "radial"
			: "linear";
		let shakeAmplitude
			= parseFloat(shakeDisplace) / 100 * 90 * Math.PI / 2;
		//
		let oscillateProfile =
			{
				"runOnMount":false,
				"easing":"linear",
				"duration":shakeDuration,
				"animation":
				{
					"opacity":"1"
				},
				"progress":(elements, complete, remaining, start, tweenValue)=>
				{
					// http://velocityjs.org/
					// The value of tweenValue is being reported as null for
					// unknown reasons. In order to tween the rotation according
					// to the easing, the actual value of the opacity must be
					// used as it tweens from zero to one. Additionally, at the
					// completion of the tween, the value of the opacity is set
					// back to zero by Velocity.
					//
					let progressValue
						= (elements[0].style.opacity > 0)
						? elements[0].style.opacity
						: 0;
					let shakeTime
						= shakeDuration / 1000 * progressValue;
					let oscillateValue
						= shakeAmplitude * Math.sin(shakeTime * shakeFrequency * Math.PI * 2) / Math.exp(shakeTime * shakeFriction);
					//
					switch(shakeAxis)
					{
						case "x":
							var childTransform
								= (shakeMotion === "radial")
								? "rotateX(".concat(oscillateValue.toString(), distanceUnit, ")")
								: "translateX(".concat(oscillateValue.toString(), distanceUnit, ")");
							//
						break;
						case "y":
							var childTransform
								= (shakeMotion === "radial")
								? "rotateY(".concat(oscillateValue.toString(), distanceUnit, ")")
								: "translateY(".concat(oscillateValue.toString(), distanceUnit, ")");
							//
						break;
						case "z":
							var childTransform
								= (shakeMotion === "radial")
								? "rotateZ(".concat(oscillateValue.toString(), distanceUnit, ")")
								: "translateZ(".concat(oscillateValue.toString(), distanceUnit, ")");
							//
						break;
					}
					Object.assign(childElement.style,
					{
						"transform":childTransform
					});
					scopeProxy.props.Report.Change(
					{
						"Child":childElement,
						"Oscillate":
						{
							"Displace":shakeDisplace,
							"Friction":shakeFriction,
							"Speed":shakeFrequency,
							"Duration":shakeDuration,
							"Value":oscillateValue
						},
						"Percent":complete * 100
					});
				},
				"complete":(event)=>
				{
					let completeProfile =
						{
							"runOnMount":false,
							"easing":"linear",
							"duration":0,
							"animation":
							{
								"opacity":0
							},
							"progress":(elements, complete, remaining, start, tweenValue)=>
							{
								// empty
							},
							"complete":(event)=>
							{
								scopeProxy.props.Report.Complete(
								{
									"Child":childElement,
									"Oscillate":
									{
										"Displace":shakeDisplace,
										"Friction":shakeFriction,
										"Speed":shakeFrequency,
										"Duration":shakeDuration,
										"Axis":shakeAxis
									}
								});
							}
						}
					//
					updateState(scopeProxy,
					{
						"Portal":
						{
							"Velocity":
							{
								"Profile":completeProfile
							}
						}
					});
				}
			}
		//
		this.props.Report.Start(
		{
			"Child":childElement,
			"Oscillate":
			{
				"Displace":shakeDisplace,
				"Friction":shakeFriction,
				"Speed":shakeFrequency,
				"Duration":shakeDuration,
				"Axis":shakeAxis
			}
		});
		updateState(scopeProxy,
		{
			"Portal":
			{
				"Velocity":
				{
					"Profile":oscillateProfile
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
			// empty
		}
	//
}