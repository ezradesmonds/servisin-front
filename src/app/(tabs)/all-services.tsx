import React from "react";
import { View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';

export default (props) => {
	return (
		<View 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					paddingTop: 0,
				}}>
				<View style={{ paddingTop: 24 }} />
				<View 
					style={{
						backgroundColor: "#FFFFFF00",
						borderRadius: 16,
						paddingVertical: 8,
						marginBottom: 21,
						marginHorizontal: 23,
						shadowColor: "#191C210D",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 32
						},
						shadowRadius: 64,
						elevation: 64,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 12,
							marginLeft: 8,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#E1E2EA",
								borderRadius: 12,
								paddingVertical: 10,
								paddingHorizontal: 16,
								marginRight: 17,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/yzv1b8p5_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 15,
									height: 15,
									marginRight: 8,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 4,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 14,
									}}>
									{"All Filters"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#003F87",
								borderRadius: 12,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF00",
									borderRadius: 12,
									paddingVertical: 10,
									paddingHorizontal: 16,
									shadowColor: "#0000001A",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 2
									},
									shadowRadius: 4,
									elevation: 4,
								}}>
								<View 
									style={{
										paddingVertical: 3,
										paddingHorizontal: 1,
										marginRight: 8,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 14,
										}}>
										{"Rating: 4.5+"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/75mb29tq_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 10,
										height: 10,
									}}
								/>
							</View>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#E1E2EA",
							borderRadius: 12,
							paddingVertical: 10,
							paddingHorizontal: 16,
							marginBottom: 12,
							marginLeft: 8,
						}}>
						<View 
							style={{
								paddingVertical: 3,
								paddingHorizontal: 1,
								marginRight: 8,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 14,
								}}>
								{"Price: Low to High"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/y6eh3oah_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 12,
								width: 9,
								height: 5,
							}}
						/>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#E1E2EA",
							borderRadius: 12,
							paddingVertical: 10,
							paddingHorizontal: 16,
							marginLeft: 8,
						}}>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 3,
								marginRight: 8,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 14,
								}}>
								{"Availability: Today"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/0a2ozucp_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 12,
								width: 13,
								height: 15,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 48,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#00000000",
							borderRadius: 24,
							borderWidth: 1,
							padding: 1,
							marginBottom: 36,
							shadowColor: "#191C210D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 32
							},
							shadowRadius: 64,
							elevation: 64,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/w1v7e3h7_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingTop: 16,
								paddingLeft: 16,
							}}
							>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F9F9FFE3",
									borderRadius: 9999,
									paddingVertical: 6,
									paddingHorizontal: 12,
									marginBottom: 208,
									shadowColor: "#0000000D",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 1
									},
									shadowRadius: 2,
									elevation: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/0vuuytmw_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 15,
										height: 14,
										marginRight: 6,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 4,
										marginRight: 6,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"4.9"}
									</Text>
								</View>
								<View 
									style={{
										paddingVertical: 2,
										paddingHorizontal: 1,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 12,
										}}>
										{"(128)"}
									</Text>
								</View>
							</View>
						</ImageBackground>
						<View 
							style={{
								padding: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 16,
								}}>
								<View 
									style={{
										paddingTop: 7,
										paddingRight: 1,
									}}>
									<Text 
										style={{
											color: "#003F87",
											fontSize: 20,
											fontWeight: "bold",
											marginBottom: 4,
											marginLeft: 1,
										}}>
										{"Marcus Rivera"}
									</Text>
									<View 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#7EFBA433",
											borderRadius: 6,
											paddingVertical: 3,
											paddingHorizontal: 8,
										}}>
										<Text 
											style={{
												color: "#004C24",
												fontSize: 12,
											}}>
											{"8 Years Exp."}
										</Text>
									</View>
								</View>
								<View 
									style={{
										paddingBottom: 5,
									}}>
									<View 
										style={{
											alignSelf: "flex-start",
											paddingVertical: 3,
											paddingHorizontal: 1,
											marginBottom: 6,
										}}>
										<Text 
											style={{
												color: "#424752",
												fontSize: 10,
											}}>
											{"Starts from"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#865300",
											fontSize: 18,
											fontWeight: "bold",
											marginLeft: 43,
										}}>
										{"$45"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 16,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 14,
									}}>
									{"Specialist in ductless systems and high-\nefficiency heat pumps. Guaranteed same-…"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 8,
								}}>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#003F87",
										borderRadius: 12,
										paddingVertical: 18,
										marginRight: 12,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"Book Now"}
									</Text>
								</TouchableOpacity>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/e6xnx4ea_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 50,
										height: 43,
									}}
								/>
							</View>
						</View>
					</View>
					<TouchableOpacity 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#00000000",
							borderRadius: 24,
							borderWidth: 1,
							padding: 1,
							marginBottom: 36,
							shadowColor: "#191C210D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 32
							},
							shadowRadius: 64,
							elevation: 64,
						}} onPress={() => router.push('/service-detail')}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/0q5z4t32_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingVertical: 16,
								paddingLeft: 16,
							}}
							>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F9F9FFE3",
									borderRadius: 9999,
									paddingVertical: 6,
									paddingHorizontal: 12,
									marginBottom: 168,
									shadowColor: "#0000000D",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 1
									},
									shadowRadius: 2,
									elevation: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/k6lbjo2t_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 15,
										height: 14,
										marginRight: 6,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 4,
										marginRight: 5,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"4.8"}
									</Text>
								</View>
								<View 
									style={{
										padding: 2,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 12,
										}}>
										{"(94)"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#004C24",
									borderRadius: 8,
									paddingVertical: 6,
									paddingHorizontal: 12,
								}}>
								<View 
									style={{
										width: 6,
										height: 6,
										backgroundColor: "#7EFBA4",
										borderRadius: 9999,
										marginRight: 6,
									}}>
								</View>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Available Now"}
								</Text>
							</View>
						</ImageBackground>
						<View 
							style={{
								padding: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 16,
								}}>
								<View 
									style={{
										paddingTop: 7,
									}}>
									<Text 
										style={{
											color: "#003F87",
											fontSize: 20,
											fontWeight: "bold",
											marginBottom: 3,
										}}>
										{"Sarah Chen"}
									</Text>
									<View 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#7EFBA433",
											borderRadius: 6,
											paddingVertical: 3,
											paddingHorizontal: 8,
											marginRight: 24,
										}}>
										<Text 
											style={{
												color: "#004C24",
												fontSize: 12,
											}}>
											{"5 Years Exp."}
										</Text>
									</View>
								</View>
								<View 
									style={{
										paddingBottom: 5,
									}}>
									<View 
										style={{
											alignSelf: "flex-start",
											paddingVertical: 3,
											paddingHorizontal: 1,
											marginBottom: 6,
										}}>
										<Text 
											style={{
												color: "#424752",
												fontSize: 10,
											}}>
											{"Starts from"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#865300",
											fontSize: 18,
											fontWeight: "bold",
											marginLeft: 43,
										}}>
										{"$39"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									paddingRight: 14,
									marginBottom: 16,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 14,
									}}>
									{"Certified electrical specialist with focus on\nsmart thermostat integration and eco-…"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 8,
								}}>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#003F87",
										borderRadius: 12,
										paddingVertical: 18,
										marginRight: 12,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"Book Now"}
									</Text>
								</TouchableOpacity>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/6m1xe06a_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 50,
										height: 43,
									}}
								/>
							</View>
						</View>
					</TouchableOpacity>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#00000000",
							borderRadius: 24,
							borderWidth: 1,
							padding: 1,
							marginBottom: 36,
							shadowColor: "#191C210D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 32
							},
							shadowRadius: 64,
							elevation: 64,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/7ugb81ho_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingTop: 16,
								paddingLeft: 16,
							}}
							>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F9F9FFE3",
									borderRadius: 9999,
									paddingVertical: 6,
									paddingHorizontal: 12,
									marginBottom: 208,
									shadowColor: "#0000000D",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 1
									},
									shadowRadius: 2,
									elevation: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/l3mwvn8x_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 15,
										height: 14,
										marginRight: 6,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 4,
										marginRight: 6,
									}}>
									<Text 
										style={{
											color: "#191C21",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"5.0"}
									</Text>
								</View>
								<View 
									style={{
										paddingVertical: 2,
										paddingHorizontal: 1,
									}}>
									<Text 
										style={{
											color: "#424752",
											fontSize: 12,
										}}>
										{"(210)"}
									</Text>
								</View>
							</View>
						</ImageBackground>
						<View 
							style={{
								padding: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 16,
								}}>
								<View 
									style={{
										paddingTop: 7,
									}}>
									<Text 
										style={{
											color: "#003F87",
											fontSize: 20,
											fontWeight: "bold",
											marginBottom: 3,
										}}>
										{"Julian Varma"}
									</Text>
									<View 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#7EFBA433",
											borderRadius: 6,
											paddingVertical: 3,
											paddingHorizontal: 8,
											marginRight: 30,
										}}>
										<Text 
											style={{
												color: "#004C24",
												fontSize: 12,
											}}>
											{"12 Years Exp."}
										</Text>
									</View>
								</View>
								<View 
									style={{
										paddingBottom: 5,
									}}>
									<View 
										style={{
											alignSelf: "flex-start",
											paddingVertical: 3,
											paddingHorizontal: 1,
											marginBottom: 6,
										}}>
										<Text 
											style={{
												color: "#424752",
												fontSize: 10,
											}}>
											{"Starts from"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#865300",
											fontSize: 18,
											fontWeight: "bold",
											marginLeft: 41,
										}}>
										{"$60"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									paddingRight: 16,
									marginBottom: 16,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 14,
									}}>
									{"Master technician for central AC units and\nindustrial HVAC. Expert in leak detection…"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 8,
								}}>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#003F87",
										borderRadius: 12,
										paddingVertical: 18,
										marginRight: 12,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"Book Now"}
									</Text>
								</TouchableOpacity>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/pbtoj5ho_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 50,
										height: 43,
									}}
								/>
							</View>
						</View>
					</View>
					<LinearGradient 
						start={{x:0, y:0}}
						end={{x:0, y:1}}
						colors={["#003F87", "#0056B3"]}
						style={{
							alignItems: "center",
							borderRadius: 24,
							paddingVertical: 32,
							marginBottom: 32,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/fmqkfsog_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 24,
								width: 128,
								height: 128,
								marginBottom: 32,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
								marginHorizontal: 34,
							}}>
							<View 
								style={{
									alignSelf: "stretch",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										paddingTop: 6,
										marginBottom: 12,
										marginHorizontal: 30,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 30,
											fontWeight: "bold",
										}}>
										{"Alex Shepherd"}
									</Text>
								</View>
								<View 
									style={{
										alignItems: "center",
										backgroundColor: "#865300",
										borderRadius: 9999,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFFFFF00",
											borderRadius: 9999,
											paddingVertical: 5,
											paddingHorizontal: 12,
											shadowColor: "#0000001A",
											shadowOpacity: 0.1,
											shadowOffset: {
											    width: 0,
											    height: 4
											},
											shadowRadius: 6,
											elevation: 6,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/60xv0e89_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 9,
												height: 12,
												marginRight: 4,
											}}
										/>
										<Text 
											style={{
												color: "#FFFFFF",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"TOP RATED"}
										</Text>
									</View>
								</View>
							</View>
							<View 
								style={{
									alignSelf: "stretch",
									paddingVertical: 4,
									paddingHorizontal: 1,
									marginBottom: 8,
								}}>
								<Text 
									style={{
										color: "#DBEAFE",
										fontSize: 16,
										textAlign: "center",
									}}>
									{"Voted Best Technician in the city for\n3 years running. Specializing in\nhigh-performance cooling systems\nand comprehensive maintenance."}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "stretch",
									alignItems: "center",
									paddingTop: 16,
									marginBottom: 8,
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: 28,
										marginHorizontal: 41,
									}}>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingVertical: 3,
												paddingHorizontal: 4,
												marginBottom: 11,
											}}>
											<Text 
												style={{
													color: "#BFDBFE",
													fontSize: 10,
												}}>
												{"Experience"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#FFFFFF",
												fontSize: 20,
												fontWeight: "bold",
											}}>
											{"15 Years"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												alignItems: "center",
												paddingVertical: 3,
												marginBottom: 9,
											}}>
											<Text 
												style={{
													color: "#BFDBFE",
													fontSize: 10,
												}}>
												{"Average Price"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#FFFFFF",
												fontSize: 20,
												fontWeight: "bold",
											}}>
											{"$55/hr"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										alignItems: "center",
										marginBottom: 31,
									}}>
									<View 
										style={{
											paddingVertical: 3,
											paddingHorizontal: 1,
											marginBottom: 10,
										}}>
										<Text 
											style={{
												color: "#BFDBFE",
												fontSize: 10,
											}}>
											{"Verified Repairs"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 20,
											fontWeight: "bold",
										}}>
										{"1.2k+"}
									</Text>
								</View>
							</View>
							<TouchableOpacity 
								style={{
									backgroundColor: "#FFFFFF00",
									borderRadius: 16,
									paddingVertical: 20,
									paddingHorizontal: 33,
									shadowColor: "#0000001A",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 8
									},
									shadowRadius: 10,
									elevation: 10,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#003F87",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Check Availability"}
								</Text>
							</TouchableOpacity>
						</View>
					</LinearGradient>
					<View 
						style={{
							alignItems: "center",
							backgroundColor: "#FFFFFF00",
							borderRadius: 24,
							paddingVertical: 34,
							shadowColor: "#191C210D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 32
							},
							shadowRadius: 64,
							elevation: 64,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/tw8x7shz_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 24,
								width: 64,
								height: 88,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
								paddingBottom: 8,
							}}>
							<View 
								style={{
									paddingVertical: 4,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#003F87",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"Quality Guarantee"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								alignSelf: "stretch",
								paddingVertical: 4,
								paddingHorizontal: 9,
								marginHorizontal: 34,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 14,
									textAlign: "center",
								}}>
								{"All our technicians pass a rigorous 50-\npoint background check and skill\nassessment."}
							</Text>
						</View>
						<View 
							style={{
								alignItems: "center",
								paddingTop: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View 
									style={{
										width: 8,
										height: 8,
										backgroundColor: "#004C24",
										borderRadius: 9999,
										marginRight: 8,
									}}>
								</View>
								<View 
									style={{
										width: 8,
										height: 8,
										backgroundColor: "#003F8733",
										borderRadius: 9999,
										marginRight: 8,
									}}>
								</View>
								<View 
									style={{
										width: 8,
										height: 8,
										backgroundColor: "#003F8733",
										borderRadius: 9999,
									}}>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
